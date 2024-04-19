import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PastNewsPage = () => {
  return (
    <>
      <Metadata title="PastNews" description="PastNews page" />

      <h1>PastNewsPage</h1>
      <p>
        Find me in <code>./web/src/pages/PastNewsPage/PastNewsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>pastNews</code>, link to me with `
        <Link to={routes.pastNews()}>PastNews</Link>`
      </p>
    </>
  )
}

export default PastNewsPage
