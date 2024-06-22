import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Accaunt from "./Pages/Accaunt";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { loader as featuredProductsLoader } from "./Components/FeaturedProducts";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: featuredProductsLoader,
  },
  {
    path: "/accaunt",
    element: <Accaunt />,
  },
  {
    path: "/products",
    element: <Products />,
    loader: featuredProductsLoader,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
