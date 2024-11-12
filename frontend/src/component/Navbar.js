import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand active fs-0.5 " to="/">COOK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-5" aria-current="page" to="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 " to="/createFood" >Add Food</a>
              </li>
            </ul>
            <div className="d-flex">
              <a className="btn bg-white text-success nav-link me-1" to="/Login">Log in</a>
              <a className=" btn bg-white text-success nav-link me-1" to="/Signup">Sign up</a>
            </div>
            <div className=" btn bg-white text-danger nav-link me-1" >
              Logout
            </div>

          </div>

        </div>
      </nav>
    </div>
  )
}
