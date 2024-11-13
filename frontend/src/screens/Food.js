import React from 'react'
import Navbar from '../component/Navbar'

export default function Food() {
  return (
    <div>
      <Navbar></Navbar>
      <form>
        {/* Food Name */}
        <div className="form-group">
          <label>Food Name</label>
          <input type="text" className="form-control" placeholder="Food name" required />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select className="form-control" required>
            <option value="">Select category</option>
            <option value="meat">Meat</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="lactosefri">Lactosfri</option>
            <option value="glutonfri">Glutonfri</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>

        {/* Ingredients */}
        <div className="form-group">
          <label>Ingredients</label>

          <div className="ingredient-field">
            <input type="text" className="form-control" placeholder="Ingredient name" name="name" required />
            <input type="text" className="form-control" placeholder="Quantity" name="quantity" required />
            <button type="button" >
              Remove
            </button>
          </div>
          <button type="button" >
            Add Ingredient
          </button>
        </div>

        {/* Short Description */}
        <div className="form-group">
          <label>Short Description</label>
          <textarea className="form-control" rows="3" required ></textarea>
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Methods / Description</label>
          <textarea className="form-control" rows="3" ></textarea>
        </div>
        <div className="form-group">
          <img src="--" style={{ height: "10rem", width: "10rem" }} alt="choose a file" ></img>
          <input type="file" accept="image/jpeg, image/jpg, image/png" className="form-control-file" id="inputPic" />
        </div>
        <hr></hr>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
