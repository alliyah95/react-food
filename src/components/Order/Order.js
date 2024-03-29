import React, { useContext } from "react";
import AppContext from "../../store/app-context";
import OrderForm from "./OrderForm";

const Order = (props) => {
    const appContext = useContext(AppContext);

    const submitOrder = async ({ name, address, email }) => {
        const response = await fetch(process.env.REACT_APP_FIREBASE_POST_URL, {
            method: "POST",
            body: JSON.stringify({
                name,
                address,
                email,
                orders: appContext.cart,
                total: appContext.cartTotal,
            }),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await response.json();

        // update meal quantity on cart
        for (let item of appContext.cart) {
            appContext.onUpdateQuantity(item.id, "decrement", item.quantity);
        }
        // TODO: completely remove products from cart when their quantity turns to 0

        appContext.onChangeView("home");
        props.onOrder();
    };
    return <OrderForm onPlaceOrder={submitOrder} />;
};

export default Order;
