import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import { CartContext } from './Pages/CartContext';

const App = () => {
    const [ cart, setCart ] = useState({});

    // Fetch cart from local storage 
    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));

    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])
 
    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />
                    <Switch>
                        <Route path='/' component={Home} exact></Route>
                        <Route path='/products' component={ProductsPage} exact></Route>
                        <Route path='/products/:_id' component={SingleProduct} exact></Route>
                        <Route path='/cart' component={Cart} exact></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;