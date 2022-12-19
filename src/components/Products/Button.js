const Button = (props) => {
    return (
        <button
            onClick={props.onclick}
            type="button"
            className="w-full bg-secondary hover:bg-secondary-dark active:bg-secondary-dark text-white font-decorated py-1 "
        >
            Add to bag
        </button>
    );
};

export default Button;
