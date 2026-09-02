export function createCandidateId(random: () => number, used: Set<string>) {
  let id = ''
  let attempts = 0
  do {
    id = `#${Math.floor(random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()}`
    attempts += 1
    if (attempts > 100) {
      id = `#${String(used.size + 1).padStart(6, '0')}`
      break
    }
  } while (used.has(id))
  used.add(id)
  return id
}
