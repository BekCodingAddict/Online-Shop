import { Link } from "react-router-dom";

function FeaturedProduct({ product }) {
  return (
    <div className="col-4">
      <Link to="">
        <img src={product.images[0]} alt="" />
      </Link>
      <a href="productdetail.html">
        <h4>Red Printed T-Shirt</h4>
      </a>
      <div className="rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
      </div>
      <p>$49.99</p>
    </div>
  );
}

export default FeaturedProduct;
