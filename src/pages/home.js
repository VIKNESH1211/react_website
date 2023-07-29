import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/linga.png"
import '../styles/home.css'

function home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1> The Source of Yoga </h1>
        <p> Its time! to feel Union</p>
        <Link to='https://isha.sadhguru.org/in/en/center/consecrated-spaces/112-feet-adiyogi'>
        <button>
            Experience
        </button>
        </Link>
      </div>
    </div>
  )
}

export default home
