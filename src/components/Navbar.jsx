import React from "react";
import "./navbar.css" ;
import {useNavigate} from 'react-router-dom'





export const Navbar = () => {

  const navigate = useNavigate() ;

    const handleHome = () => {
        navigate("/")
    }

    const handleAbout = () => {
        navigate("/about")
    }

    const handleProducts = () => {
      navigate("/products")
  }
    
  return (
    <div>
      <div id="Container_NAvbar">
          <div onClick={handleHome} className="hero1"> Home </div>

          <div onClick={handleAbout} className="hero1"> About </div>

          <div onClick={handleProducts} className="hero1">Products</div>

      </div>
    
    </div>

  ) 
};