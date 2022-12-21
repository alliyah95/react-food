import Button from "../Button";

const ProductCard = (props) => {
    const handleAddToCart = () => {
        props.onAdd({ id: props.id, name: props.name, price: props.price });
    };

    return (
        <div className="card">
            <div className="card__img">
                <img
                    src={require("./img/bibimbap.png")}
                    alt="Bibimbap"
                    className="product-img"
                />
            </div>
            <div className="card__info">
                <h3 className="text-lg md:text-xl font-semibold font-decorated">
                    {props.name}
                </h3>
                <p className="text-sm md:text-md">${props.price}</p>
            </div>
            <Button onclick={handleAddToCart}>Add to bag</Button>
        </div>
    );
};

export default ProductCard;
