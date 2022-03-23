import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import axios from "axios";
import "../components/product.css";

import { getProductsReq } from "../Redux/actions";
import { SingleProductList } from "./SingleProduct";

export const Products = () => {
  // to get all products list on component mounts;

    const dispatch = useDispatch();
  const fetchProducts = async () => {

    const response = await axios
      .get("https://movie-fake-server.herokuapp.com/products")
      .catch((err) => { console.log(err) });
    dispatch(getProductsReq(response.data))

  }



  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js

    fetchProducts();
    // dispatch(getproductsData())
  }, []);

 

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

     <div className="products-list">
     <SingleProductList/>
     </div>

    </>
  );
};
