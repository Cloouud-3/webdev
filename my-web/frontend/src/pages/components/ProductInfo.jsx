import './styles/ProductInfo.css';

function ProductInfo({product}) {
    return(
        <div className="product-con">
            <div className="prodcon-top">
                <div className="prodcon-top-wrapper">
                    <span className="span1">{product.title}</span>
                    <span className="span2">₱ {product.price}</span>
                    <img className="product-img" src={product.img} />  
                </div>
            </div>

            <div className="prodcon-bottom">
                <span className="span3">{product.description}</span>
            </div>
        </div>
    )
}
export default ProductInfo