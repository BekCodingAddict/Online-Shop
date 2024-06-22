import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ReletedProducts from "../Components/ReletedProducts";

function ProductDetails() {
  return (
    <div>
      <NavBar />
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img
              src="images/gallery-1.jpg"
              alt=""
              width="100%"
              id="ProductImg"
            />

            <div className="small-img-row">
              <div className="small-img-col">
                <img
                  src="images/gallery-1.jpg"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="images/gallery-2.jpg"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="images/gallery-3.jpg"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
              <div className="small-img-col">
                <img
                  src="images/gallery-4.jpg"
                  alt=""
                  width="100%"
                  className="small-img"
                />
              </div>
            </div>
          </div>
          <div className="col-2">
            <p>Home / T-Shirt</p>
            <h1>Red Printed T-Shirt by HRX</h1>
            <h4>$50.00</h4>
            <select>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <input type="number" value="1" />
            <a href="" className="btn">
              Add To Cart
            </a>

            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            <br />
            <p>
              Give your summer wardrobe a style upgrade with the HRX Men&apos;s
              Active T-Shirt. Team it with a pair of shorts for your morning
              workout or a denims for an evening out with the guys.
            </p>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="row row-2">
          <h2>Related Products</h2>
          <p>View More</p>
        </div>
      </div>

      <ReletedProducts />
      <Footer />
    </div>
  );
}

export default ProductDetails;
