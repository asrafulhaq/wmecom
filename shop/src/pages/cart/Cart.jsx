import { Link } from "react-router-dom";
import shop12 from "../../assets/images/shop/12.jpg";
import shop13 from "../../assets/images/shop/13.jpg";

const Cart = () => {
  return (
    <>
      <main className="main cart">
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb shop-breadcrumb bb-no">
              <li className="active">
                <a href="cart.html">Shopping Cart</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
              <li>
                <a href="order.html">Order Complete</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="page-content">
          <div className="container">
            <div className="row gutter-lg mb-10">
              <div className="col-lg-8 pr-lg-4 mb-6">
                <table className="shop-table cart-table">
                  <thead>
                    <tr>
                      <th className="product-name">
                        <span>Product</span>
                      </th>
                      <th></th>
                      <th className="product-price">
                        <span>Price</span>
                      </th>
                      <th className="product-quantity">
                        <span>Quantity</span>
                      </th>
                      <th className="product-subtotal">
                        <span>Subtotal</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail">
                        <div className="p-relative">
                          <a href="product-default.html">
                            <figure>
                              <img
                                src={shop12}
                                alt="product"
                                width="300"
                                height="338"
                              />
                            </figure>
                          </a>
                          <button type="submit" className="btn btn-close">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </td>
                      <td className="product-name">
                        <a href="product-default.html">
                          Classic Simple Backpack
                        </a>
                      </td>
                      <td className="product-price">
                        <span className="amount">$40.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="input-group">
                          <input
                            className="quantity form-control"
                            type="number"
                            min="1"
                            max="100000"
                          />
                          <button className="quantity-plus w-icon-plus"></button>
                          <button className="quantity-minus w-icon-minus"></button>
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="amount">$40.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <div className="p-relative">
                          <a href="product-default.html">
                            <figure>
                              <img
                                src={shop13}
                                alt="product"
                                width="300"
                                height="338"
                              />
                            </figure>
                          </a>
                          <button className="btn btn-close">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </td>
                      <td className="product-name">
                        <a href="product-default.html">Smart Watch</a>
                      </td>
                      <td className="product-price">
                        <span className="amount">$60.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="input-group">
                          <input
                            className="quantity form-control"
                            type="number"
                            min="1"
                            max="100000"
                          />
                          <button className="quantity-plus w-icon-plus"></button>
                          <button className="quantity-minus w-icon-minus"></button>
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="amount">$60.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="cart-action mb-6">
                  <Link
                    to="/shop"
                    className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"
                  >
                    <i className="w-icon-long-arrow-left"></i>Continue Shopping
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-rounded btn-default btn-clear"
                    name="clear_cart"
                    value="Clear Cart"
                  >
                    Clear Cart
                  </button>
                  <button
                    type="submit"
                    className="btn btn-rounded btn-update disabled"
                    name="update_cart"
                    value="Update Cart"
                  >
                    Update Cart
                  </button>
                </div>

                <form className="coupon">
                  <h5 className="title coupon-title font-weight-bold text-uppercase">
                    Coupon Discount
                  </h5>
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Enter coupon code here..."
                    required
                  />
                  <button className="btn btn-dark btn-outline btn-rounded">
                    Apply Coupon
                  </button>
                </form>
              </div>
              <div className="col-lg-4 sticky-sidebar-wrapper">
                <div className="sticky-sidebar">
                  <div className="cart-summary mb-4">
                    <h3 className="cart-title text-uppercase">Cart Totals</h3>
                    <div className="cart-subtotal d-flex align-items-center justify-content-between">
                      <label className="ls-25">Subtotal</label>
                      <span>$100.00</span>
                    </div>

                    <hr className="divider" />

                    <ul className="shipping-methods mb-2">
                      <li>
                        <label className="shipping-title text-dark font-weight-bold">
                          Shipping
                        </label>
                      </li>
                      <li>
                        <div className="custom-radio">
                          <input
                            type="radio"
                            id="free-shipping"
                            className="custom-control-input"
                            name="shipping"
                          />
                          <label
                            htmlFor="free-shipping"
                            className="custom-control-label color-dark"
                          >
                            Free Shipping
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-radio">
                          <input
                            type="radio"
                            id="local-pickup"
                            className="custom-control-input"
                            name="shipping"
                          />
                          <label
                            htmlFor="local-pickup"
                            className="custom-control-label color-dark"
                          >
                            Local Pickup
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-radio">
                          <input
                            type="radio"
                            id="flat-rate"
                            className="custom-control-input"
                            name="shipping"
                          />
                          <label
                            htmlFor="flat-rate"
                            className="custom-control-label color-dark"
                          >
                            Flat rate: $5.00
                          </label>
                        </div>
                      </li>
                    </ul>

                    <div className="shipping-calculator">
                      <p className="shipping-destination lh-1">
                        Shipping to <strong>CA</strong>.
                      </p>

                      <form className="shipping-calculator-form">
                        <div className="form-group">
                          <div className="select-box">
                            <select
                              name="country"
                              className="form-control form-control-md"
                            >
                              <option value="default" selected="selected">
                                United States (US)
                              </option>
                              <option value="us">United States</option>
                              <option value="uk">United Kingdom</option>
                              <option value="fr">France</option>
                              <option value="aus">Australia</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="select-box">
                            <select
                              name="state"
                              className="form-control form-control-md"
                            >
                              <option value="default" selected="selected">
                                California
                              </option>
                              <option value="ohaio">Ohaio</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-md"
                            type="text"
                            name="town-city"
                            placeholder="Town / City"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-md"
                            type="text"
                            name="zipcode"
                            placeholder="ZIP"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-dark btn-outline btn-rounded"
                        >
                          Update Totals
                        </button>
                      </form>
                    </div>

                    <hr className="divider mb-6" />
                    <div className="order-total d-flex justify-content-between align-items-center">
                      <label>Total</label>
                      <span className="ls-50">$100.00</span>
                    </div>
                    <a
                      href="#"
                      className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout"
                    >
                      Proceed to checkout
                      <i className="w-icon-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
