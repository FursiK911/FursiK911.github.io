"""Check deliverable PDF contracts independently of the layout builder."""

import json
import re
from pathlib import Path

import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
PUBLIC = ROOT / "public/cv"


def normalize(value):
    return re.sub(r"\s+", " ", value).strip()


def expected_text(data):
    yield data["name"]
    yield data["title"]
    yield "19fursik99@gmail.com"
    yield "t.me/FursiK911"
    yield "fursik.github.io"
    yield data["availability"]
    yield data["employment"]
    yield data["summary"]
    for skill in data["skills"]:
        if isinstance(skill, str):
            yield skill
        else:
            yield skill["title"]
            yield from skill["items"]
    for page in data["pages"]:
        for entry in page:
            for key in ("company", "role", "dates", "context"):
                yield entry[key]
            yield from entry["bullets"]
    if "project" in data:
        yield data["project"]
    yield data["education"]
    yield data["languages"]


def verify(source):
    data = json.loads(source.read_text(encoding="utf-8"))
    name = f"Dmitry-Fursov-{data['role']}-Developer-{data['language'].upper()}.pdf"
    target = PUBLIC / name
    reader = PdfReader(target)
    assert len(reader.pages) == 2, f"{name}: incorrect page count"
    assert not reader.is_encrypted
    assert target.stat().st_size < 1_000_000
    text = normalize(" ".join(page.extract_text() for page in reader.pages))
    assert "\ufffd" not in text
    assert not re.search(r"1322356|fursik911@yandex|1999|100,?000\+", text)
    if data["language"] == "en":
        assert not re.search(r"Rostov|Ростов|UTC|GMT|on-site|hybrid", text, re.I)
        assert data["availability"] == "Remote"
    cursor = 0
    for item in expected_text(data):
        position = text.find(normalize(item), cursor)
        assert position >= 0, f"{name}: missing or out-of-order text: {item}"
        cursor = position + len(normalize(item))
    uris = []
    for page in reader.pages:
        assert len(page.images) == 0
        for font in page["/Resources"]["/Font"].values():
            font = font.get_object()
            if font.get("/Subtype") == "/TrueType":
                assert "/FontFile2" in font["/FontDescriptor"].get_object()
                assert "/ToUnicode" in font
        for annotation in page.get("/Annots", []):
            action = annotation.get_object().get("/A", {})
            if "/URI" in action:
                uris.append(action["/URI"])
    assert set(uris) == {"mailto:19fursik99@gmail.com", "https://t.me/FursiK911", "https://fursik.github.io/"}
    with pdfplumber.open(target) as pdf:
        for page in pdf.pages:
            body = [c for c in page.chars if c["top"] < page.height - 44]
            assert body and min(c["size"] for c in body) >= 10.49
            assert all(38 <= c["x0"] and c["x1"] <= page.width - 38 and c["top"] >= 30 for c in body)
            assert data["name"] in page.extract_text()
    assert target.read_bytes() == (ROOT / "output/pdf" / name).read_bytes()
    print(f"PASS {name}: text order, contacts, links, fonts, bounds, size and pages")


def main():
    sources = sorted((ROOT / "docs/resume/content").glob("*.json"))
    assert len(sources) == 4
    for source in sources:
        verify(source)


if __name__ == "__main__":
    main()
