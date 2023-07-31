import React ,{ useState } from 'react';
import Logo from "../assets/rdfpaafatq25safmqnv5loif52.png";
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
          <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu.js">Programs</Link>
          <Link to="/About.js">About</Link>
          <Link to="/Contact.js">Contact</Link>
          </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu.js">Programs</Link>
        <Link to="/About.js">About</Link>
        <Link to="/Contact.js">Contact</Link>
        <button onClick = {toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
