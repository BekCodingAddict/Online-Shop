import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Accaunt from "./Pages/Accaunt";
import Products from "./Pages/Products";

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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
