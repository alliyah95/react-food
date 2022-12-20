import React, { useState, useContext } from "react";
import ProductList from "./ProductList";
import products from "./dummy-products.js";
import CartContext from "../../store/cart-context";

/**
 * This component passes the dummy products to ProductList
 * Additionally, it is also responsible for updating the user's cart
 * Every time a product is added to the cart, the cart object in CartContext is also updated
 */

const Products = () => {
    const [addedProducts, setAddedProducts] = useState([]);
    const cartContext = useContext(CartContext);

    const addToCartHandler = (id, name, price) => {
        const selectedProduct = addedProducts.find(
            (product) => product.id === id
        );

        if (selectedProduct === undefined) {
            setAddedProducts((prevProducts) => [
                {
                    id: id,
                    name: name,
                    price: price,
                    quantity: 1,
                },
                ...prevProducts,
            ]);
        } else {
            setAddedProducts((prevProducts) => {
                prevProducts.map((product) => {
                    if (product.id === id) {
                        product.quantity += 1;
                    }
                    return product;
                });
                return prevProducts;
            });
        }
        cartContext.cart = addedProducts;
    };
    return <ProductList products={products} onAddToCart={addToCartHandler} />;
};

export default Products;
