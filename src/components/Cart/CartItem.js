import React, { useContext, useEffect, useState } from "react";
import CartItemButton from "./CartItemButton";
import AppContext from "../../store/app-context";

const CartItem = (props) => {
    const appContext = useContext(AppContext);
    const [quantity, setQuantity] = useState(props.quantity);

    useEffect(() => {
        const keyProduct = appContext.cart.find(
            (product) => product.id === props.id
        );
        setQuantity(keyProduct.quantity);
    }, [appContext.cart, props.id]);

    const updateQuantity = (type) => {
        appContext.onUpdateQuantity(props.id, type);
    };

    return (
        <div className="cart-item flex bg-gray p-3 justify-between">
            <div className="item-info flex items-center space-x-2">
                <img
                    src={require(`../images/${props.name
                        .replaceAll(" ", "-")
                        .toLowerCase()}.png`)}
                    alt={props.name}
                    className="w-1/4 md:w-1/6 block"
                />
                <div className="item-details w-3/4 md:w-5/6">
                    <p>{props.name}</p>
                    <p>${props.price}</p>
                </div>
            </div>
            <div className="flex item-quantity items-center justify-center space-x-5 p-3">
                <CartItemButton onclick={() => updateQuantity("decrement")}>
                    -
                </CartItemButton>
                <span>{quantity}</span>
                <CartItemButton onclick={() => updateQuantity("increment")}>
                    +
                </CartItemButton>
            </div>
        </div>
    );
};

export default CartItem;
