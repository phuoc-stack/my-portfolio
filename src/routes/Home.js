import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Chatbox from '../components/ChatBox'
import "../components/ChatBoxStyles.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Chatbox/>
      <Footer/>
    </div>
  )
}

export default Home
