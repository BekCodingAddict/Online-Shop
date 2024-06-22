import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function Cart() {
  return (
    <div>
      <NavBar />
      <div className="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src="images/buy-1.jpg" alt="" />
                <div>
                  <p>Red Printed T-shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src="images/buy-2.jpg" alt="" />
                <div>
                  <p>Red Printed T-shirt</p>
                  <small>Price: $75.00</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$75.00</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src="images/buy-3.jpg" alt="" />
                <div>
                  <p>Red Printed T-shirt</p>
                  <small>Price: $69.00</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$69.00</td>
          </tr>
        </table>

        <div className="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$194.99</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$224.99</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
