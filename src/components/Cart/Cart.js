import React, { useContext } from "react";
import AppContext from "../../store/app-context";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

const Cart = () => {
    const appContext = useContext(AppContext);

    let total = 0;
    for (let product of appContext.cart) {
        total += product.quantity * product.price;
    }

    if (appContext.cart.length === 0 && total === 0) {
        return <p>There are no items here!</p>;
    }

    return (
        <div className="space-y-5 md:w-[80%] md:mx-auto md:flex md:justify-between md:space-y-0 md:space-x-5">
            <CartItems />
            <OrderSummary />
        </div>
    );
};

export default Cart;
