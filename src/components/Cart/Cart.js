import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

const Cart = () => {
    return (
        <div className="space-y-5 md:w-[80%] md:mx-auto md:flex md:justify-between md:space-y-0 md:space-x-5  animate__animated animate__fadeIn">
            <CartItems />
            <OrderSummary />
        </div>
    );
};

export default Cart;
