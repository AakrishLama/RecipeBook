import React, { useState } from 'react'
import Navbar from '../component/Navbar'

export default function Food() {
  const [foodName, setFoodName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [outPic, setOutPic] = useState(null);

  const handleIngredientChange = (index, event) => {
    const values = [...ingredients];
    values[index][event.target.name] = event.target.value;
    setIngredients(values);
  };

  // Add more ingredient fields
  const addIngredientField = () => {
    setIngredients([...ingredients, { name: '', quantity: '' }]);
  };

  // Remove ingredient fields
  const removeIngredientField = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };

  const handleImage = (e) => {
    const file = e.target.files[0]
    console.log("e.target.file[0]" + file);
    setImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a preview URL
      console.log(imageUrl)
      setOutPic(imageUrl);
    }
  }


  return (
    <div>
      <Navbar></Navbar>
      <form>
        {/* Food Name */}
        <div className="form-group">
          <label>Food Name</label>
          <input type="text" className="form-control" placeholder="Food name" value={foodName} onChange={(e) => setFoodName(e.target.value)} required />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select className="form-control" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required>
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
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-field">
              <input type="text" className="form-control" placeholder="Ingredient name" name="name" value={ingredient.name} onChange={(event) => handleIngredientChange(index, event)} required />
              <input type="text" className="form-control" placeholder="Quantity" name="quantity" value={ingredient.quantity} onChange={(event) => handleIngredientChange(index, event)} required />
              {ingredients.length > 1 && (
                <button type="button" onClick={() => removeIngredientField(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addIngredientField}>
            Add Ingredient
          </button>
        </div>

        {/* Short Description */}
        <div className="form-group">
          <label>Short Description</label>
          <textarea className="form-control" rows="3" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required ></textarea>
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Methods / Description</label>
          <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <img src={outPic} style={{ height: "10rem", width: "10rem" }} alt="choose a file" ></img>
          <input type="file" accept="image/jpeg, image/jpg, image/png" className="form-control-file" id="inputPic" onChange={handleImage} />
        </div>
        <hr></hr>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
