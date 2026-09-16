import { getPageUrl } from '../utils/getPageUrl'
import { setMeta } from '../utils/setMeta'

it('normalizes the current URL and updates both new and existing metadata nodes', () => {
  window.history.replaceState({}, '', '/case?preview=1#gallery')
  expect(getPageUrl()).toBe('http://localhost:3000/case')

  setMeta('meta[name="author"]', { name: 'author', content: 'Dmitry' })
  expect(document.querySelector('meta[name="author"]')).toHaveAttribute(
    'content',
    'Dmitry',
  )
  setMeta('meta[name="author"]', { name: 'author', content: 'Portfolio' })
  expect(document.querySelector('meta[name="author"]')).toHaveAttribute(
    'content',
    'Portfolio',
  )
})
