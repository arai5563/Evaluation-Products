import React from "react";
import {useSelector } from "react-redux";
import "../components/product.css";
export const SingleProductList = () => {

  const products = useSelector((state) => state.allProducts.products);
  
  
  const renderProduct = products.map((c) => {
    return(

  
<div key={c.id}> 
      <div>
        <img src={c.image} alt={c.brand} />
      </div>
      <div>
        <h4>{c.brand}</h4>
        <p>{c.title}</p>
        <p>{c.category}</p>
        <p> ₹ {c.price}</p>
      </div>
    </div>

    )
  })

    return (
      <>
      
      {renderProduct}
      </>
    )
};
