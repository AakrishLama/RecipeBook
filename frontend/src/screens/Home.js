import React, { useState, useEffect } from 'react'
import charImage from '../component/images/char.png';
import cofeImage from "../component/images/coffee.png";
import sandwichImage from "../component/images/sandwich.png";
import Navbar from '../component/Navbar'
import Card from '../component/Card'


export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("")


  const loadData = async () => {
    let response = await fetch("http://localhost:9000/api/getFood", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" }
    });
    response = await response.json();
    // console.log(response[0], response[1])
    setFoodCat(response[0]);
    setFoodItem(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div id="carouselExample" className="carousel slide"  >
          <div className="carousel-inner" style={{ maxHeight: "400px" }} >
            <div className=" carousel-caption  " style={{ zIndex: "9" }}>
              <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="search food..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
              </form>
            </div>
            <div className="carousel-item active">
              <img src={charImage} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={cofeImage} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={sandwichImage} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {foodCat.length !== 0 ? foodCat.map((data) => {
        return (
          <div key={data._id} className='row mb-3'>
            <div className="fs-3 m-3">{data.categoryName}</div>
            <hr />
            {foodItem.length !== 0 ? foodItem.filter((element) => (element.categoryName === data.categoryName) && (element.name.toLowerCase().includes(search.toLowerCase())))
              .map((filterItem) => {
                return (
                  <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                    <Card foodName={filterItem.name} foodIntro={filterItem.shortDescription} foodImg={filterItem.image} />
                  </div>
                )
              }) : ""}
          </div>
        )
      }) : ""
      }
    </div>
  )
}
