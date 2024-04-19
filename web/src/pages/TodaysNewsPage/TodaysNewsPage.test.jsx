import { render } from '@redwoodjs/testing/web'

import TodaysNewsPage from './TodaysNewsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TodaysNewsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodaysNewsPage />)
    }).not.toThrow()
  })
})
