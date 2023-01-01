import React, { useContext, useState, useEffect } from "react";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";
import AppContext from "../../store/app-context";

const Cart = () => {
    const appContext = useContext(AppContext);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        setCartTotal(appContext.cartTotal);
    }, [appContext.cartTotal]);

    if (cartTotal > 0) {
        return (
            <div className="space-y-5 md:w-[80%] md:mx-auto md:flex md:justify-between md:space-y-0 md:space-x-5  animate__animated animate__fadeIn">
                {<CartItems />}
                {<OrderSummary />}
            </div>
        );
    }

    return (
        <div>
            <p className="text-tertiary">
                You have not selected anything yet...
            </p>
        </div>
    );
};

export default Cart;
