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
                    <span className="button">Button 1</span>
                    <span className="button">Button 2</span>
                    <span className="button">Button 3</span>
                    <span className="button">Button 4</span>
                </div>
            </div>

            {/* body */}
            <div className="body">
                <div className="body-wrapper">
                    <div className="product-display">
                        <div className="product-display-top">
                            <input
                                className="filter"
                                placeholder="Search"
                                type="text"
                            />
                        </div>

                        <div className="product-display-bottom">
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