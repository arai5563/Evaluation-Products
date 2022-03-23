import React from "react";
import "./navbar.css" ;
import {useNavigate} from 'react-router-dom'


const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  //   add the other link as well
];


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