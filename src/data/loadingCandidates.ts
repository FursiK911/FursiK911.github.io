export type CandidateStatus = 'searching' | 'rejected' | 'matched'

export interface LoadingCandidate {
  id: string
  name: string
  status: CandidateStatus
}

export const loadingCandidateNames = [
  'ALEXANDER MORGAN',
  'DANIEL CARTER',
  'MICHAEL TURNER',
  'ROBERT WALKER',
  'ETHAN HARRIS',
  'DAVID MILLER',
  'JAMES ANDERSON',
  'THOMAS MITCHELL',
  'RYAN COOPER',
  'WILLIAM PARKER',
  'OLIVER BENNETT',
  'LUCAS HARRISON',
  'NATHAN BROOKS',
  'SAMUEL COLLINS',
  'CHRISTOPHER REED',
  'YAN MANIKO',
  'BOGDAN ALYABYEV',
  'MAXIM KAPISHEV',
  'VYACHESLAV BELKOV',
  'NIKITA POLISHCHUK',
] as const

function createId(random: () => number, used: Set<string>) {
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

export function createLoadingCandidates(random = Math.random) {
  const used = new Set<string>()
  return [...loadingCandidateNames]
    .sort(() => random() - 0.5)
    .slice(0, 9)
    .map((name) => ({
      id: createId(random, used),
      name,
      status: 'searching' as const,
    }))
}

export function createMatchedCandidate(random = Math.random): LoadingCandidate {
  return {
    id: createId(random, new Set()),
    name: 'DMITRY FURSOV',
    status: 'matched',
  }
}
