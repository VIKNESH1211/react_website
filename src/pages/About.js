import React from 'react';
import about from "../assets/about.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
       <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})` }}>
        </div>
      <div className="aboutBottom">
        <h1> About Us</h1>
        <p>At the core of our philosophy lies the belief that each individual possesses an innate ability to find balance and harmony within themselves. We provide a supportive and nurturing environment for people to explore the depths of their consciousness, reconnect with their inner selves, and cultivate a profound sense of mindfulness. Our teachings are rooted in various meditation techniques and wisdom from both ancient traditions and modern practices.</p>
      </div>
    </div>
  )
}

export default About
