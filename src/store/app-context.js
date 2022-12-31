import React, { useState, useEffect } from "react";

const AppContext = React.createContext({
    cart: [],
    cartTotal: 0,
    view: "",
    onUpdateQuantity: (id) => {},
    onChangeView: (selectedView) => {},
    onAddToCart: (product) => {},
});

export const AppContextProvider = (props) => {
    const [view, setView] = useState("home");
    const [addedProducts, setAddedProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        addedProducts.forEach((product) => {
            total += product.quantity * product.price;
        });
        setTotal(total);
    }, [addedProducts]);

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

    const quantityHandler = (id, type, qty = 1) => {
        const updatedProducts = addedProducts.map((product) => {
            if (product.id === id) {
                switch (type) {
                    case "increment":
                        product.quantity += qty;
                        break;
                    case "decrement":
                        product.quantity -= qty;
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
                cartTotal: total,
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
