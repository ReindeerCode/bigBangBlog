import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TodaysNewsPage = () => {
  return (
    <>
      <Metadata title="TodaysNews" description="TodaysNews page" />
      <header>
        <h1>Big Bang Blog: Today's News Page</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.pastNews()}>Past News</Link>
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

export default TodaysNewsPage
