import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const Products = () => {
  // to get all products list on component mounts;

  const products = useSelector((state) => state.allProducts.products);

  const {id,title} = products[0];

  console.log(products);
  // useEffect(() => {
  //   //   dispatch an action to the store
  //   // dont make call here
  //   // handle it as thunk call in actions.js
  //   dispatch(getproductsData())
  // }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>

      
  
      
    </>
  );
};
