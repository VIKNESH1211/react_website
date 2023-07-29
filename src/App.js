import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,  Route , Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Footer from "./components/Footer.js";
import menu from './pages/menu';
import About from './pages/About.js';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App"> 
    <Router>
    <Navbar />
      <Routes>
        <Route path = "/" exact Component={Home} />
        <Route path = "/menu.js" exact Component={menu} />
        <Route path = "/About.js" exact Component={About} />
        <Route path = "/Contact.js" exact Component={Contact} />

      </Routes>
      <Footer />
    </Router>
     
    </div>
  ); 
}

export default App;
