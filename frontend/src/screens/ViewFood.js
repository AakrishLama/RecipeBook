import React from 'react'

export default function ViewFood(props) {

    const cropImgPath = (msg) => {
        if (typeof msg === 'string') {
            // Handle "uploads/" path
            if (msg.includes("../frontend/public/fotos/")) {
                return msg.replace("../frontend/public/fotos/", "./fotos/");
            }
        } else {
            console.warn('msg is not a valid string:', msg); // Log a warning if msg is not valid
        }
        return '../pictures/example.png'; // Set a default image path
    };

    //Ensure props.Img is passed correctly, and use it htmlFor the crop function
    const imagePath = cropImgPath(props.select.image);
    console.log(props.select._id)

    return (
        <div className="container" style={{ backgroundColor: "black" }}>
            <img style={{ height: "10rem", width: "10rem", margin: "auto", marginLeft:"45%" }} src={imagePath} alt="incorrect filepath" ></img>
            <hr></hr>
            <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-5">Name</label>
                <div>{props.select.name}</div>

                <hr></hr>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5">category</label>
                <div>{props.select.categoryName}</div>

                <hr></hr>
            </div>
            <div className="mb-3 bg-white" >
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5">Ingredients</label>
                {props.select.ingredients.map((ingredient, index) => (
                    <div key={ingredient._id}>
                        <strong>{index + 1}<br /> Name:</strong> {ingredient.name} <br />
                        <strong> Quantity:</strong> {ingredient.quantity}
                        <hr />
                    </div>
                ))}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5">shortDesciption</label>
                <div>{props.select.shortDescription}</div>

                <hr></hr>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5">Methods</label>
                <div>{props.select.description}</div>
                <hr></hr>
            </div>
        </div>
    )
}


