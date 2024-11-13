import React from 'react'
import cofeImage from "./images/coffee.png";

export default function Card() {
  return (
    <div>
      <div className="card mt-3 mx-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={cofeImage} alt="foto missing.." />
        <div className="card-body">
          <h5 className="card-title">title</h5>
          <p className="card-text truncate-text" >description</p>
          <button className="btn btn-primary">View Details</button> {/* Call the onClick prop */}
        </div>
      </div>
    </div>
  )
}
