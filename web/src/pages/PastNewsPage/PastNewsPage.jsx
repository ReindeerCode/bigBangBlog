import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PastNewsPage = () => {
  return (
    <>
      <Metadata title="PastNews" description="PastNews page" />
      <header>
        <h1>Big Bang Blog: Past News Page</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.todaysNews()}>Today's News</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <code>Content TBD</code>
        <p>
          <Link to={routes.home()}>Return home</Link>
        </p>
      </main>
    </>
  )
}

export default PastNewsPage
