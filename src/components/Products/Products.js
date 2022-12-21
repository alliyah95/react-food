import React, { useContext } from "react";
import ProductList from "./ProductList";
import products from "./dummy-products.js";
import AppContext from "../../store/app-context";

/**
 * This component passes the dummy products to ProductList
 * Additionally, it is also involved in updating the user's cart
 * Every time a product is added to the cart, the cart object in AppContext is also updated
 * by calling the onAddToCart property of appContext
 */

const Products = () => {
    const appContext = useContext(AppContext);

    const addToCartHandler = (id, name, price) => {
        appContext.onAddToCart(id, name, price);
    };

    return <ProductList products={products} onAddToCart={addToCartHandler} />;
};

export default Products;
