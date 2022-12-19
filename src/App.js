import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import ProductsContext from "./store/products-context";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <Main>
                <Products />
            </Main>
            <Footer />
        </div>
    );
};
export default App;
