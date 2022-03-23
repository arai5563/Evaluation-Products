import { ActionTypes } from "./actionTypes";


// action for get products request
export const getProductsReq = (products) => {
   
    return {
        type: ActionTypes.GET_PRODUCTS,
        payload: products
    };

};

// action for get products success

const getProductsSuccess = () => ({});

// action for get products failure

const getProductsFailure = () => ({});

// thunk call to fetch products  list
const getproductsData = () => ({});

// action object for sort  feature

const sortProducts = () => ({});
