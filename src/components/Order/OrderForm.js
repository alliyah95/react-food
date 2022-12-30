import React from "react";

const OrderForm = () => {
    return (
        <form className="flex flex-col">
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input id="name" />
            </div>
            <div>
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" />
            </div>

            <button className="w-full md:w-auto py-1 px-8 self-end bg-secondary hover:bg-secondary-dark active:bg-secondary-dark text-white font-decorated ">
                Checkout
            </button>
        </form>
    );
};

export default OrderForm;
