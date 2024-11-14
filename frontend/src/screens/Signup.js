import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geoLocation: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:9000/api/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geoLocation })
    })
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert("Enter valid credentials")
      console.log("error")
    } else {
      alert("Sign up successfull")
      console.log(credentials)

    }
  }

const onChange = (e) => {
  setCredentials({ ...credentials, [e.target.name]: e.target.value })
}
return (
  <div>
    <Navbar />
    <div className='container mt-4' style={{ backgroundColor: 'black' }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" className="form-control" name="geoLocation" value={credentials.geoLocation} onChange={onChange} />
        </div>
        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to="/Login" className="m-3 btn btn-danger"> Login</Link>
      </form>
    </div>
  </div>
)
}
