import { useRef } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function Accaunt() {
  const loginRef = useRef();
  const registerRef = useRef();
  const indicator = useRef();

  const loginForm = () => {
    registerRef.current.style.transform = "translateX(300px)";
    loginRef.current.style.transform = "translateX(300px)";
    indicator.current.style.transform = "translateX(0px)";
  };

  const regForm = () => {
    registerRef.current.style.transform = "translateX(0px)";
    loginRef.current.style.transform = "translateX(0px)";
    indicator.current.style.transform = "translateX(100px)";
  };

  return (
    <div>
      <NavBar />

      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src="images/image1.png" alt="" width="100%" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={loginForm}>Login</span>
                  <span onClick={regForm}>Register</span>
                  <hr ref={indicator} id="Indicator" />
                </div>
                <form
                  ref={loginRef}
                  action="index.html"
                  method="POST"
                  id="LoginForm"
                >
                  <input type="text" id="username" placeholder="Username" />
                  <input type="password" id="password" placeholder="Password" />
                  <button className="btn" onclick="getInfo()" type="submit">
                    Login
                  </button>
                  <a href="">Forgot password</a>
                </form>
                <form action="" id="RegForm" ref={registerRef}>
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button className="btn" type="submit">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Accaunt;
