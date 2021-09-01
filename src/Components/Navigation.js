import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Pages/CartContext';

const Navigation = () => {
    const stylingcart = {
        background : '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px',

    } 

    const { cart } = useContext(CartContext);

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-8">
                <Link to='/'>
                    <img style={{ height: 45}} src="/images/logo.png" alt="logo" />
                </Link>

                <ul className="flex items-center">
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className='ml-6'>
                        <Link to='/products'>PRODUCTS</Link>
                    </li>
                    <li className='ml-6'>
                        <Link to='/cart'>
                            <div style={stylingcart}>
                                <span>{ cart.totalItems ? cart.totalItems : 0 }</span>
                                <img className='ml-2' src="/images/cart.png" alt="cart" />
                            </div>
                        </Link>
                    </li>
                </ul>

                
            </nav>
        </>
    )
}

export default Navigation;