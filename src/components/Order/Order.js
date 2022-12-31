import React, { useContext } from "react";
import AppContext from "../../store/app-context";
import OrderForm from "./OrderForm";

const Order = () => {
    const appContext = useContext(AppContext);

    const submitOrder = async ({ name, address, email }) => {
        const response = await fetch(
            "https://react-food-b230d-default-rtdb.firebaseio.com/orders.json",
            {
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
                },
            }
        );
        const data = await response.json();
    };
    return <OrderForm onPlaceOrder={submitOrder} />;
};

export default Order;
