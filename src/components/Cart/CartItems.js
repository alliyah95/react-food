import React, { useContext } from "react";
import CartItem from "./CartItem";
import AppContext from "../../store/app-context";

const CartItems = () => {
    const appContext = useContext(AppContext);

    return (
        <div className="md:w-3/5 lg:w-2/5 space-y-5">
            {appContext.cart.map((product) => {
                return (
                    product.quantity > 0 && (
                        <CartItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                        ></CartItem>
                    )
                );
            })}
        </div>
    );
};

export default CartItems;
