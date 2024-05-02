// ** React router imports
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1>Oopss!</h1>
      <p>404 - PAGE NOT FOUND</p>
      <Link className="primary" to="/">
        GO TO HOME PAGE
      </Link>
    </section>
  )
}

export default NotFound;