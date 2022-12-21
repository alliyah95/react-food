import React, { useContext } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import AppContext from "../store/app-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
    const appContext = useContext(AppContext);

    const notify = (name) => toast(`${name} added to bag!`);

    return (
        <div className="container min-h-screen">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {appContext.view === "home" && "Delicious food for you!"}
                {appContext.view === "cart" && "Your bag"}
            </h3>
            {appContext.view === "home" && <Products onAdd={notify} />}
            {appContext.view === "cart" && <Cart />}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Main;
