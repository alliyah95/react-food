import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../store/app-context";
import Button from "../Button";

const OrderSummary = () => {
    const appContext = useContext(AppContext);
    const [total, setTotal] = useState(appContext.cartTotal);

    useEffect(() => {
        setTotal(appContext.cartTotal);
    }, [appContext.cartTotal]);

    const orderHandler = () => {
        alert("Order successfully placed!");
    };

    if (appContext.cart.length > 0 && total > 0) {
        return (
            <div className="flex flex-col self-start bg-gray md:w-2/5 lg:w-3/5 p-5">
                <h3 className="text-xl font-bold mb-2">Order Summary</h3>
                <p className="font-bold">Selected items:</p>
                <ul className="space-y-2 mb-3">
                    {appContext.cart.map((product) => {
                        return (
                            product.quantity > 0 && (
                                <li key={product.id}>
                                    <div>
                                        <p>
                                            {product.name} x {product.quantity}
                                        </p>
                                        <p className="text-tertiary">
                                            $ {product.price * product.quantity}
                                        </p>
                                    </div>
                                </li>
                            )
                        );
                    })}
                </ul>

                <h3 className="lg:mt-24 mb-3 text-xl font-bold">
                    Total: ${total}
                </h3>
                <Button onclick={orderHandler} disabled={total <= 0}>
                    Place order
                </Button>
            </div>
        );
    }
};

export default OrderSummary;
