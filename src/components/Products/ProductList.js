import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    const addToCartHandler = ({ id, name, price }) => {
        props.onAddToCart(id, name, price);
    };

    if (Array.isArray(props.products)) {
        return (
            <div className="products  animate__animated animate__fadeIn">
                {props.products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            onAdd={addToCartHandler}
                        />
                    );
                })}
            </div>
        );
    }

    return <React.Fragment>{props.products}</React.Fragment>;
};

export default ProductList;
