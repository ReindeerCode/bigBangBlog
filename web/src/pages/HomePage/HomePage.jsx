import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <header>
        <h1>Big Bang Blog: Home Page</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.todaysNews()}>Today's News</Link>
            </li>
            <li>
              <Link to={routes.pastNews()}>Past News</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>
      </main>
    </>
  )
}

export default HomePage
