"""Build the four reviewed CVs: python tools/resume/build.py.

PDFs are deterministic for a fixed Python/ReportLab version and source content.
No network or private source repositories are needed to rebuild them.
"""

import json
import shutil
from functools import partial
from pathlib import Path
from xml.sax.saxutils import escape

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import HRFlowable, PageBreak, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "docs/resume/content"
OUTPUT = ROOT / "output/pdf"
PUBLIC = ROOT / "public/cv"
FONTS = Path(__file__).parent / "fonts"
ACCENT = colors.HexColor("#155E75")
INK = colors.HexColor("#18252E")
MUTED = colors.HexColor("#42515C")
LABELS = {
    "ru": {
        "profile": "ПРОФЕССИОНАЛЬНЫЙ ПРОФИЛЬ",
        "skills": "КЛЮЧЕВЫЕ НАВЫКИ",
        "experience": "ОПЫТ РАБОТЫ",
        "continued": "ОПЫТ РАБОТЫ - ПРОДОЛЖЕНИЕ",
        "project": "ДОПОЛНИТЕЛЬНЫЙ ПРОЕКТ",
        "education": "ОБРАЗОВАНИЕ И ЯЗЫКИ",
    },
    "en": {
        "profile": "PROFESSIONAL SUMMARY",
        "skills": "TECHNICAL SKILLS",
        "experience": "WORK EXPERIENCE",
        "continued": "WORK EXPERIENCE - CONTINUED",
        "project": "ADDITIONAL PROJECT",
        "education": "EDUCATION AND LANGUAGES",
    },
}


def styles():
    base = dict(fontName="Ubuntu", fontSize=10.5, leading=13.6, textColor=INK,
                alignment=TA_LEFT, spaceAfter=3)
    return {
        "body": ParagraphStyle("Body", **base),
        "bullet": ParagraphStyle("Bullet", **{**base, "leftIndent": 9, "firstLineIndent": -9}),
        "name": ParagraphStyle("Name", **{**base, "fontName": "Ubuntu-Bold", "fontSize": 27, "leading": 31, "spaceAfter": 6}),
        "title": ParagraphStyle("Title", **{**base, "fontSize": 13, "leading": 17, "textColor": ACCENT, "spaceAfter": 9}),
        "section": ParagraphStyle("Section", **{**base, "fontName": "Ubuntu-Bold", "fontSize": 10.5, "textColor": ACCENT, "spaceBefore": 11, "spaceAfter": 6, "keepWithNext": True}),
        "company": ParagraphStyle("Company", **{**base, "fontName": "Ubuntu-Bold", "fontSize": 12, "leading": 15, "spaceBefore": 8, "spaceAfter": 3, "keepWithNext": True}),
        "role": ParagraphStyle("Role", **{**base, "fontName": "Ubuntu-Bold", "keepWithNext": True}),
        "context": ParagraphStyle("Context", **{**base, "textColor": MUTED, "keepWithNext": True}),
        "continuation": ParagraphStyle("Continuation", **{**base, "fontName": "Ubuntu-Bold", "fontSize": 14, "leading": 18, "spaceAfter": 8}),
    }


def paragraph(text, style):
    return Paragraph(escape(text), style)


def job(entry, sheet):
    result = [
        paragraph(entry["company"], sheet["company"]),
        paragraph(entry["role"], sheet["role"]),
        paragraph(entry["dates"], sheet["context"]),
        paragraph(entry["context"], sheet["context"]),
    ]
    result.extend(paragraph("- " + item, sheet["bullet"]) for item in entry["bullets"])
    return result


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#D6E0E5"))
    canvas.line(42, 32, A4[0] - 42, 32)
    canvas.setFont("Ubuntu", 9)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(A4[0] - 42, 20, f"{doc.page} / 2")
    canvas.restoreState()


def build(source):
    data = json.loads(source.read_text(encoding="utf-8"))
    labels = LABELS[data["language"]]
    sheet = styles()
    name = f"Dmitry-Fursov-{data['role']}-Developer-{data['language'].upper()}.pdf"
    target = OUTPUT / name
    story = [paragraph(data["name"], sheet["name"]), paragraph(data["title"], sheet["title"])]
    contacts = (
        '<link href="mailto:19fursik99@gmail.com" color="#155E75">19fursik99@gmail.com</link>'
        ' | <link href="https://t.me/FursiK911" color="#155E75">t.me/FursiK911</link><br/>'
        '<link href="https://fursik.github.io/" color="#155E75">fursik.github.io</link>'
    )
    story.extend([
        Paragraph(contacts, sheet["body"]),
        paragraph(data["availability"], sheet["body"]),
        paragraph(data["employment"], sheet["body"]),
        Spacer(1, 4),
        HRFlowable(width="100%", thickness=1.2, color=ACCENT),
        paragraph(labels["profile"], sheet["section"]),
        paragraph(data["summary"], sheet["body"]),
        paragraph(labels["skills"], sheet["section"]),
    ])
    story.extend(paragraph(skill, sheet["body"]) for skill in data["skills"])
    story.append(paragraph(labels["experience"], sheet["section"]))
    for entry in data["pages"][0]:
        story.extend(job(entry, sheet))
    story.extend([
        PageBreak(),
        paragraph(data["name"] + " | " + data["role"] + " Developer", sheet["continuation"]),
        HRFlowable(width="100%", thickness=1.2, color=ACCENT),
        paragraph(labels["continued"], sheet["section"]),
    ])
    for entry in data["pages"][1]:
        story.extend(job(entry, sheet))
    if "project" in data:
        story.extend([paragraph(labels["project"], sheet["section"]), paragraph(data["project"], sheet["body"])])
    story.extend([
        paragraph(labels["education"], sheet["section"]),
        paragraph(data["education"], sheet["body"]),
        paragraph(data["languages"], sheet["body"]),
    ])
    doc = SimpleDocTemplate(str(target), pagesize=A4, rightMargin=42, leftMargin=42,
                            topMargin=35, bottomMargin=44, pageCompression=1,
                            title=f"{data['name']} - {data['title']}", author=data["name"],
                            subject="Professional resume", creator="ReportLab resume builder")
    doc.build(story, onFirstPage=footer, onLaterPages=footer,
              canvasmaker=partial(Canvas, invariant=1))
    reader = PdfReader(target)
    if len(reader.pages) != 2:
        raise ValueError(f"{name}: expected 2 pages, got {len(reader.pages)}. Edit content or spacing; do not shrink text below 10.5 pt.")
    if target.stat().st_size >= 1_000_000:
        raise ValueError(f"{name}: file exceeds 1 MB")
    print(f"Built {name}: 2 pages, {target.stat().st_size:,} bytes")
    return target


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(TTFont("Ubuntu", str(FONTS / "Ubuntu-R.ttf")))
    pdfmetrics.registerFont(TTFont("Ubuntu-Bold", str(FONTS / "Ubuntu-B.ttf")))
    pdfmetrics.registerFontFamily("Ubuntu", normal="Ubuntu", bold="Ubuntu-Bold")
    targets = [build(path) for path in sorted(SOURCE.glob("*.json"))]
    if len(targets) != 4:
        raise ValueError("Expected exactly four CV sources")
    # Publish only after all four pass the build checks.
    for target in targets:
        shutil.copyfile(target, PUBLIC / target.name)


if __name__ == "__main__":
    main()
