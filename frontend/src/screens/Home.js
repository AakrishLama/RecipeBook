import React, { useState, useEffect } from 'react'
import Carousel from '../component/Carausel'
import Navbar from '../component/Navbar'
import Card from '../component/Card'


export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

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
      <Carousel></Carousel>
      {foodCat.length !== 0 ? foodCat.map((data) => {
        return (
          <div key={data._id} className='row mb-3'>
            <div className="fs-3 m-3">{data.categoryName}</div>
            <hr />
            {foodItem.length !== 0 ? foodItem.filter((element) => (element.categoryName === data.categoryName) )
              .map((filterItem) => {
                return (
                  <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                    <Card foodName={filterItem.name} foodIntro={filterItem.shortDescription} foodImg={filterItem.image}/>
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
