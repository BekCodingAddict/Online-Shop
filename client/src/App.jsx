import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Accaunt from "./Pages/Accaunt";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { loader as featuredProductsLoader } from "./Components/FeaturedProducts";

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
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
