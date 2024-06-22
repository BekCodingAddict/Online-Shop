import { Link } from "react-router-dom";

function FeaturedProduct({ product }) {
  return (
    <div className="col-4">
      <Link to="">
        <img src={product.images[0]} alt={product.title} />
      </Link>
      <a href="productdetail.html">
        <h4>{product.title}</h4>
      </a>
      <div className="rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
      </div>
      <p>{product.price}</p>
    </div>
  );
}

export default FeaturedProduct;
