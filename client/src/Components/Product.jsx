function Product({ product }) {
  return (
    <div className="col-4">
      <img src={product.images[0]} alt={product.title} />
      <h4>{product.title}</h4>
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

export default Product;
