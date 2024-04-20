import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PastNewsPage = () => {
  return (
    <>
      <Metadata title="PastNews" description="PastNews page" />
      <code>Content TBD</code>
      <p>
        <Link to={routes.home()}>Return home</Link>
      </p>
    </>
  )
}

export default PastNewsPage
