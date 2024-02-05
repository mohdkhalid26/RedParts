import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "./Home.scss"
import Header from '../../component/header/Header'
import Main from '../../component/main/Main'
import Footer from '../../component/footer/Footer'
// import Slider from '../../component/slider/Slider'
// <Slider/>

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home