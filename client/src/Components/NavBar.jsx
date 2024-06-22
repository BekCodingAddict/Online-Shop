import { NavLink, Link } from "react-router-dom";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";
import BCA2 from "../assets/BCA-Logo2.png";

function NavBar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img id="logo" src={BCA2} alt="logo" width="280px" height="58px" />
          </Link>
        </div>
        <nav>
          <ul id="MenuItems">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <NavLink to="/accaunt">Account</NavLink>
            </li>
          </ul>
        </nav>
        <img src={cart} width="30px" height="30px" alt="" />
        <img
          id="logo"
          src={menu}
          className="menu-icon"
          // onclick="menutoggle()"
        />
      </div>
    </div>
  );
}

export default NavBar;
