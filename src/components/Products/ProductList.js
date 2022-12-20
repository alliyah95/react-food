import ProductCard from "./ProductCard";

const ProductList = (props) => {
    const addToCartHandler = ({ id, name, price }) => {
        props.onAddToCart(id, name, price);
    };

    return (
        <div className="products">
            {props.products.map((product) => {
                return (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        onAdd={addToCartHandler}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;
