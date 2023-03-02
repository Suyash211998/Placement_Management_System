import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CPMS</a>
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Career Guidance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
