import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Accaunt from "./Pages/Accaunt";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
