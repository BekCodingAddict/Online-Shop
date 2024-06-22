import { useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiProducts";
import FeaturedProduct from "./FeaturedProduct";

function FeaturedProducts() {
  const products = useLoaderData();

  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>
      <div className="row">
        {products
          .filter((product, index) => index > products.length - 5)
          .map((product) => (
            <FeaturedProduct product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export async function loader() {
  const { products } = await getProducts();
  return products;
}

export default FeaturedProducts;
