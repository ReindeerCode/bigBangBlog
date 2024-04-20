import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TodaysNewsPage = () => {
  return (
    <>
      <Metadata title="TodaysNews" description="TodaysNews page" />
      <code>Content TBD</code>
      <p>
        <Link to={routes.home()}>Return home</Link>
      </p>
    </>
  )
}

export default TodaysNewsPage
