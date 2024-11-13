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
      console.log(response[0], response[1])
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
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  )
}
