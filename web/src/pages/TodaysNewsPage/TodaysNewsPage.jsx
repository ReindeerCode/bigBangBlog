import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TodaysNewsPage = () => {
  return (
    <>
      <Metadata title="TodaysNews" description="TodaysNews page" />

      <h1>TodaysNewsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TodaysNewsPage/TodaysNewsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>todaysNews</code>, link to me with `
        <Link to={routes.todaysNews()}>TodaysNews</Link>`
      </p>
    </>
  )
}

export default TodaysNewsPage
