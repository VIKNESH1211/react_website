import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwittweIcon from '@mui/icons-material/Facebook';
import FacebookIcon from '@mui/icons-material/Twitter';
import '../styles/footer.css';


function footer() {
  return (
    <div className='footer'>
      <div className ='socialMedia'>
        <InstagramIcon /> <TwittweIcon /> <FacebookIcon />
      </div>
      <p> Made with ❤ by Viknesh </p>
    </div>
   
  )
}

export default footer
