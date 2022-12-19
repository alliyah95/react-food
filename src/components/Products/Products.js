import ProductList from "./ProductList";
import products from "./dummy-products.js";

const Products = () => {
    const retrieveProducts = (checkedOutItems) => {
        alert("Hello from Products.js");
        console.log(checkedOutItems);
    };
    // retrieve products from dummy-products.js
    return <ProductList products={products} onCheckCart={retrieveProducts} />;
};

export default Products;
