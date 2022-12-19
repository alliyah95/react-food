import React, { useReducer } from "react";
import ProductCard from "./ProductCard";

const productReducer = (products, action) => {
    switch (action.type) {
        case "ADD":
            const selectedProduct = products.find(
                (product) => product.id == action.payload.id
            );
            if (selectedProduct == undefined) {
                return [
                    ...products,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price,
                        quantity: 1,
                    },
                ];
            } else {
                return products.map((product) => {
                    // this block of code behaves weirdly
                    // 0.5 is added twice and I have yet to figure out why
                    if (product.id == action.payload.id) {
                        product.quantity += 0.5;
                    }
                    return product;
                });
            }
    }
};

const ProductList = (props) => {
    const [addedProducts, dispatchProduct] = useReducer(productReducer, []);

    const addToCart = ({ id, name, price }) => {
        dispatchProduct({
            type: "ADD",
            payload: { id: id, name: name, price: price },
        });
    };

    // remove
    const checkOutHandler = () => {
        props.onCheckCart(addedProducts);
    };

    return (
        <div className="products">
            {props.products.map((product) => {
                return (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        onAdd={addToCart}
                    />
                );
            })}

            <button onClick={checkOutHandler}>Check out</button>
        </div>
    );
};

export default ProductList;
