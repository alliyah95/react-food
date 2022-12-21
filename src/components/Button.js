const Button = (props) => {
    let classes =
        "w-full bg-secondary hover:bg-secondary-dark active:bg-secondary-dark text-white font-decorated py-1";

    return (
        <button
            onClick={props.onclick}
            type="button"
            className={`${classes} ${
                props.disabled ? "cursor-not-allowed" : ""
            }`}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
