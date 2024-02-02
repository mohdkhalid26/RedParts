import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "./Home.scss"
import Header from '../../component/header/Header'
// import Slider from '../../component/slider/Slider'
// <Slider/>

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home