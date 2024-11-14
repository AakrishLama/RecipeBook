import React from 'react'

export default function Card(props) {
  const crop = (msg) => {
    // Check if msg is defined and is a string
    if (typeof msg === 'string') {
      // Handle "uploads/" path
      if (msg.includes("../frontend/public/fotos/")) {
        return msg.replace("../frontend/public/fotos/", "./fotos/");
      }

    } else {
      console.warn('msg is not a valid string:', msg); // Log a warning if msg is not valid
    }

    // Return a default image path if msg is undefined or not a string
    return '../pictures/example.png'; // Set a default image path
  };

  //Ensure props.Img is passed correctly, and use it for the crop function
  const imagePath = crop(props.foodImg); // Use props.foodImg instead of props.Img
  // console.log('Cropped image path:', imagePath); // Log the final image path}    
  return (
    <div>
      <div className="card mt-3 mx-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imagePath} alt={`${props.foodName} foto`} style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text truncate-text" >{props.foodIntro} ** {props.foodImg} --------</p>
          <button  className="btn btn-primary">View Details</button> {/* Call the onClick prop */}
        </div>
      </div>
    </div>
  )
}
