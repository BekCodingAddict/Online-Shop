import playMarket from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import BCA from "../assets/BCA-Logo1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className="app-logo">
              <Link to={"https://play.google.com/"}>
                <img src={playMarket} alt="Play Market" />
              </Link>
              <Link to={"https://www.apple.com/app-store/"}>
                <img src={appStore} alt="App Store" />
              </Link>
            </div>
          </div>
          <div className="footer-col-2">
            <img src={BCA} alt="" />
            <p>
              Our purpose is to sustainably make the pleasure and benefits of
              sports accessible to the many.
            </p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Copyright 2024 - BCA(Bek Coding Addict) Developments
        </p>
      </div>
    </div>
  );
}

export default Footer;
