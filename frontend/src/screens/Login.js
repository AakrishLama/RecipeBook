import React from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'


export default function Login() {

  const handleSubmit = (e) => {
    console.log("submit")
  }
  return (
    <div>
      <Navbar />
      <div className='container mt-4' style={{ backgroundColor: 'black' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/Signup" className="m-3 btn btn-danger"> Sign Up</Link>
        </form>
      </div>
    </div>
  )
}
