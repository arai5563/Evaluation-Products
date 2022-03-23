import {React,useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Products } from "./ProductsDashboard";

export const SingleProductList = () => {

  const products = useSelector((state) => state.allProducts.products);

  const fetchProducts = async () => {

    const response = await axios
                    .get("https://movie-fake-server.herokuapp.com/products")
                    .catch((err) => {console.log(err)});
                    console.log('response:', response)

  }

  useEffect(() => {
    fetchProducts();
  },[]);

    // make a request to get the details
  return (<>

    <div>
      <Products/>
    </div>
  </>);
};
