import React, { useContext } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import AppContext from "../store/app-context";

const Main = () => {
    const appContext = useContext(AppContext);

    return (
        <div className="container min-h-screen">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {appContext.view === "home" && "Delicious food for you!"}
                {appContext.view === "cart" && "Your bag"}
            </h3>
            {appContext.view === "home" && <Products />}
            {appContext.view === "cart" && <Cart />}
        </div>
    );
};

export default Main;
