import React from 'react'
import Carousel from '../component/Carausel'
import Navbar from '../component/Navbar'
import Card from '../component/Card'


export default function Home() {
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
