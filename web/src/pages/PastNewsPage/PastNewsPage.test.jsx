import { render } from '@redwoodjs/testing/web'

import PastNewsPage from './PastNewsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PastNewsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PastNewsPage />)
    }).not.toThrow()
  })
})
