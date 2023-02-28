import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="col-lg-6">
          <h3 className="navbar-brand">User Project</h3>
        </div>
        <div className="col-lg-6" style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link className="nav-link" to="/login"><h3>Login</h3></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;