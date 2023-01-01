import React, { useEffect, useContext, useState } from "react";
import ProductList from "./ProductList";
import AppContext from "../../store/app-context";

const Products = (props) => {
    const appContext = useContext(AppContext);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                "https://react-food-b230d-default-rtdb.firebaseio.com/meals.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();
            const loadedProducts = [];
            for (const key in data) {
                loadedProducts.push({
                    id: data[key].id,
                    name: data[key].name,
                    price: data[key].price,
                });
            }
            setProducts(loadedProducts);
        };

        fetchMeals().catch((error) => {
            setError(error.message);
        });
    }, []);

    const addToCartHandler = (id, name, price) => {
        appContext.onAddToCart(id, name, price);
        props.onAdd(name);
    };

    let content = (
        <p className="animate-bounce text-tertiary">Fetching meals...</p>
    );

    if (products.length > 0) {
        content = products;
    }

    if (error) {
        content = <p className="text-tertiary">{error}</p>;
    }

    return <ProductList products={content} onAddToCart={addToCartHandler} />;
};

export default Products;
