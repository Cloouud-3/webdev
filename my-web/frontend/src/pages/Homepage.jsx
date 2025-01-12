import '../styles/Homepage.css';
import Logo from '../assets/Cloud.png';
import ProductInfo from './components/ProductInfo.jsx';
import Product from '../classes/Product.js';

function Homepage() {
    return(
        <div className="container">
            {/* header */}
            <div className="header">
                <div className="header-wrapper">
                    <img className="logo" src={Logo} />
                    <span className="button">About Us</span>
                    <span className="button">Contact</span>
                    <span className="button">Scatter</span>
                    <span className="button">Account</span>
                </div>
            </div>

            {/* body */}
            <div className="body">
                <div className="body-wrapper">
                    <div className="product-display">
                        <input
                            className="filter"
                            placeholder="Search"
                            type="text"
                        />

                        <div className="product-display-wrapper">
                            <ProductInfo product={Product.permaProducts[0]} />
                            <ProductInfo product={Product.permaProducts[1]} />
                            <ProductInfo product={Product.permaProducts[2]} />
                            <ProductInfo product={Product.permaProducts[3]} />
                            <ProductInfo product={Product.permaProducts[4]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Homepage