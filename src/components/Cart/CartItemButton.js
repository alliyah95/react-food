const CartItemButton = (props) => {
    return (
        <button
            className="py-2 px-4 bg-secondary text-white"
            onClick={props.onclick}
        >
            {props.children}
        </button>
    );
};

export default CartItemButton;
