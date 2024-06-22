import { Link, useLoaderData } from "react-router-dom";
import BCA2 from "../assets/BCA-Logo2.png";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";

function Header() {
  const products = useLoaderData();
  const randomNum = Math.floor(Math.random() * products.length);
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                id="logo"
                src={BCA2}
                alt="logo"
                width="280px"
                height="58px"
              />
            </Link>
          </div>
          <nav>
            <ul id="MenuItems">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <Link to="/accaunt">Account</Link>
              </li>
            </ul>
          </nav>
          <a href="cart.html">
            <img src={cart} width="30px" height="30px" alt="Cart" />
          </a>
          <img
            id="logo"
            src={menu}
            className="menu-icon"
            // onclick="menutoggle()"
          />
        </div>
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Workout <br />A New Style!
            </h1>
            <p>
              Success isn&apos;t always about greatness. It&apos;s about
              consistency. Consistent
              <br />
              hard work gains sucsess. Greatness will come.
            </p>
            <a href="" className="btn">
              Explore Now &#8594;
            </a>
          </div>
          <div className="col-2">
            <img src={products[products.length - randomNum].images[0]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
