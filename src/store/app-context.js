import React, { useState } from "react";

const AppContext = React.createContext({
    cart: [],
    view: "home",
    onUpdateQuantity: (id) => {},
    onChangeView: (selectedView) => {},
    onAddToCart: (product) => {},
});

export const AppContextProvider = (props) => {
    const [view, setView] = useState("home");
    const [addedProducts, setAddedProducts] = useState([]);

    const changeViewHandler = (selectedView) => {
        setView(selectedView);
    };

    const addToCartHandler = (id, name, price) => {
        const selectedProduct = addedProducts.find(
            (product) => product.id === id
        );

        if (selectedProduct === undefined) {
            setAddedProducts((prevProducts) => [
                {
                    key: id,
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
    };

    const quantityHandler = (id, type) => {
        const updatedProducts = addedProducts.map((product) => {
            if (product.id === id) {
                switch (type) {
                    case "increment":
                        product.quantity += 1;
                        break;
                    case "decrement":
                        product.quantity -= 1;
                        break;
                    default:
                        product.quantity += 0;
                        break;
                }
            }
            return product;
        });
        setAddedProducts(updatedProducts);
    };

    return (
        <AppContext.Provider
            value={{
                cart: addedProducts,
                view: view,
                onChangeView: changeViewHandler,
                onAddToCart: addToCartHandler,
                onUpdateQuantity: quantityHandler,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
