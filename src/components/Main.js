const Main = (props) => {
    return (
        <div className="container">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Delicious food for you!
            </h3>
            {props.children}
        </div>
    );
};

export default Main;
