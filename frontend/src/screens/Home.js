import React, { useState } from 'react'
import charImage from '../component/images/char.png';
import cofeImage from "../component/images/coffee.png";
import sandwichImage from "../component/images/sandwich.png";
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import { useFood } from './FoodContext';
import ViewFood from './ViewFood';
import Modal from '../Modal.js';
import AdminView from './AdminView';
export default function Home() {
  const { foodCat, foodItem } = useFood(); // Access food data from context
  const [search, setSearch] = useState("");
  const [selectedFood, setSelectedFood] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)



  const handleCardClick = (food) => {
    console.log(food)
    setSelectedFood(food); 
    setIsOverlayOpen(true);
  };

  return (
    <div>
      {localStorage.getItem("admin") === "false" ?
        <Modal isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)}><ViewFood select={selectedFood}></ViewFood></Modal>
        : <Modal isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)}><AdminView select={selectedFood} onClose={() => setIsOverlayOpen(!isOverlayOpen)}></AdminView></Modal>
      }      <Navbar></Navbar>
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
            <div className="fs-3 m-3" style={{font:"bold"}}>{data.categoryName}</div>
            <hr />
            {foodItem.length !== 0 ? foodItem.filter((element) => (element.categoryName === data.categoryName) && (element.name.toLowerCase().includes(search.toLowerCase())))
              .map((filterItem) => {
                return (
                  <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                    <Card foodName={filterItem.name} foodIntro={filterItem.shortDescription} foodImg={filterItem.image}
                      onClick={() => handleCardClick(filterItem)} />
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
