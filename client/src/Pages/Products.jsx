import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Product from "../Components/Product";

function Products() {
  const products = useLoaderData();
  return (
    <div>
      <NavBar />
      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Default Sorting</option>
            <option>Sort by price</option>
            <option>Sort by popularity</option>
            <option>Sort by rating</option>
            <option>Sort by sale</option>
          </select>
        </div>
        <div className="row">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
