import { projects } from '../data/projects.data'

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId)
}
