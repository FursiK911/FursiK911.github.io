import { resolveRedirectPath } from '../resolveRedirectPath'

it('replaces the current history entry only when a redirect path is present', () => {
  const replaceState = vi.spyOn(window.history, 'replaceState')

  window.history.replaceState({}, '', '/?__path=/projects/demo')
  resolveRedirectPath()
  expect(replaceState).toHaveBeenCalledWith({}, '', '/projects/demo')

  replaceState.mockClear()
  window.history.pushState({}, '', '/')
  resolveRedirectPath()
  expect(replaceState).not.toHaveBeenCalled()
})
