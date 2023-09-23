const Checkout = () => {
  return (
    <>
      <main className="main checkout">
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb shop-breadcrumb bb-no">
              <li className="passed">
                <a href="cart.html">Shopping Cart</a>
              </li>
              <li className="active">
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
            <div className="login-toggle">
              Returning customer?
              <a
                href="#"
                className="show-login font-weight-bold text-uppercase text-dark"
              >
                Login
              </a>
            </div>
            <form className="login-content">
              <p>
                If you have shopped with us before, please enter your details
                below. If you are a new customer, please proceed to the Billing
                section.
              </p>
              <div className="row">
                <div className="col-xs-6">
                  <div className="form-group">
                    <label>Username or email *</label>
                    <input
                      type="text"
                      className="form-control form-control-md"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="form-group">
                    <label>Password *</label>
                    <input
                      type="text"
                      className="form-control form-control-md"
                      name="password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="remember"
                  name="remember"
                />
                <label htmlFor="remember" className="mb-0 lh-2">
                  Remember me
                </label>
                <a href="#" className="ml-3">
                  Last your password?
                </a>
              </div>
              <button className="btn btn-rounded btn-login">Login</button>
            </form>
            <div className="coupon-toggle">
              Have a coupon?
              <a
                href="#"
                className="show-coupon font-weight-bold text-uppercase text-dark"
              >
                Enter your code
              </a>
            </div>
            <div className="coupon-content mb-4">
              <p>If you have a coupon code, please apply it below.</p>
              <div className="input-wrapper-inline">
                <input
                  type="text"
                  name="coupon_code"
                  className="form-control form-control-md mr-1 mb-2"
                  placeholder="Coupon code"
                  id="coupon_code"
                />
                <button
                  type="submit"
                  className="btn button btn-rounded btn-coupon mb-2"
                  name="apply_coupon"
                  value="Apply coupon"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
            <form className="form checkout-form" action="#" method="post">
              <div className="row mb-9">
                <div className="col-lg-7 pr-lg-4 mb-4">
                  <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                    Billing Details
                  </h3>
                  <div className="row gutter-sm">
                    <div className="col-xs-6">
                      <div className="form-group">
                        <label>First name *</label>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="firstname"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <div className="form-group">
                        <label>Last name *</label>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="lastname"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Company name (optional)</label>
                    <input
                      type="text"
                      className="form-control form-control-md"
                      name="company-name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Country / Region *</label>
                    <div className="select-box">
                      <select
                        name="country"
                        className="form-control form-control-md"
                      >
                        <option value="default" selected="selected">
                          United States (US)
                        </option>
                        <option value="uk">United Kingdom (UK)</option>
                        <option value="us">United States</option>
                        <option value="fr">France</option>
                        <option value="aus">Australia</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Street address *</label>
                    <input
                      type="text"
                      placeholder="House number and street name"
                      className="form-control form-control-md mb-2"
                      name="street-address-1"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      className="form-control form-control-md"
                      name="street-address-2"
                      required
                    />
                  </div>
                  <div className="row gutter-sm">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Town / City *</label>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="town"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>ZIP *</label>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="zip"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>State *</label>
                        <div className="select-box">
                          <select
                            name="country"
                            className="form-control form-control-md"
                          >
                            <option value="default" selected="selected">
                              California
                            </option>
                            <option value="uk">United Kingdom (UK)</option>
                            <option value="us">United States</option>
                            <option value="fr">France</option>
                            <option value="aus">Australia</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Phone *</label>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-7">
                    <label>Email address *</label>
                    <input
                      type="email"
                      className="form-control form-control-md"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group checkbox-toggle pb-2">
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="shipping-toggle"
                      name="shipping-toggle"
                    />
                    <label htmlFor="shipping-toggle">
                      Ship to a different address?
                    </label>
                  </div>
                  <div className="checkbox-content">
                    <div className="row gutter-sm">
                      <div className="col-xs-6">
                        <div className="form-group">
                          <label>First name *</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            name="firstname"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="form-group">
                          <label>Last name *</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            name="lastname"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Company name (optional)</label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        name="company-name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Country / Region *</label>
                      <div className="select-box">
                        <select
                          name="country"
                          className="form-control form-control-md"
                        >
                          <option value="default" selected="selected">
                            United States (US)
                          </option>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="us">United States</option>
                          <option value="fr">France</option>
                          <option value="aus">Australia</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Street address *</label>
                      <input
                        type="text"
                        placeholder="House number and street name"
                        className="form-control form-control-md mb-2"
                        name="street-address-1"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        className="form-control form-control-md"
                        name="street-address-2"
                        required
                      />
                    </div>
                    <div className="row gutter-sm">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Town / City *</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            name="town"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Postcode *</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            name="postcode"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country (optional)</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            name="zip"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="order-notes">Order notes (optional)</label>
                    <textarea
                      className="form-control mb-0"
                      id="order-notes"
                      name="order-notes"
                      cols="30"
                      rows="4"
                      placeholder="Notes about your order, e.g special notes for delivery"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                  <div className="order-summary-wrapper sticky-sidebar">
                    <h3 className="title text-uppercase ls-10">Your Order</h3>
                    <div className="order-summary">
                      <table className="order-table">
                        <thead>
                          <tr>
                            <th colSpan="2">
                              <b>Product</b>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bb-no">
                            <td className="product-name">
                              Palm Print Jacket <i className="fas fa-times"></i>
                              <span className="product-quantity">1</span>
                            </td>
                            <td className="product-total">$40.00</td>
                          </tr>
                          <tr className="bb-no">
                            <td className="product-name">
                              Brown Backpack <i className="fas fa-times"></i>
                              <span className="product-quantity">1</span>
                            </td>
                            <td className="product-total">$60.00</td>
                          </tr>
                          <tr className="cart-subtotal bb-no">
                            <td>
                              <b>Subtotal</b>
                            </td>
                            <td>
                              <b>$100.00</b>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="shipping-methods">
                            <td colSpan="2" className="text-left">
                              <h4 className="title title-simple bb-no mb-1 pb-0 pt-3">
                                Shipping
                              </h4>
                              <ul id="shipping-method" className="mb-4">
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
                            </td>
                          </tr>
                          <tr className="order-total">
                            <th>
                              <b>Total</b>
                            </th>
                            <td>
                              <b>$100.00</b>
                            </td>
                          </tr>
                        </tfoot>
                      </table>

                      <div className="payment-methods" id="payment_method">
                        <h4 className="title font-weight-bold ls-25 pb-0 mb-1">
                          Payment Methods
                        </h4>
                        <div className="accordion payment-accordion">
                          <div className="card">
                            <div className="card-header">
                              <a href="#cash-on-delivery" className="collapse">
                                Direct Bank Transfor
                              </a>
                            </div>
                            <div
                              id="cash-on-delivery"
                              className="card-body expanded"
                            >
                              <p className="mb-0">
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until
                                the funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              <a href="#payment" className="expand">
                                Check Payments
                              </a>
                            </div>
                            <div id="payment" className="card-body collapsed">
                              <p className="mb-0">
                                Please send a check to Store Name, Store Street,
                                Store Town, Store State / County, Store
                                Postcode.
                              </p>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              <a href="#delivery" className="expand">
                                Cash on delivery
                              </a>
                            </div>
                            <div id="delivery" className="card-body collapsed">
                              <p className="mb-0">
                                Pay with cash upon delivery.
                              </p>
                            </div>
                          </div>
                          <div className="card p-relative">
                            <div className="card-header">
                              <a href="#paypal" className="expand">
                                Paypal
                              </a>
                            </div>
                            <a
                              href="https://www.paypal.com/us/webapps/mpp/paypal-popup"
                              className="text-primary paypal-que"
                            >
                              What is PayPal?
                            </a>
                            <div id="paypal" className="card-body collapsed">
                              <p className="mb-0">
                                Pay via PayPal, you can pay with your credit
                                cart if you dont have a PayPal account.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group place-order pt-6">
                        <button
                          type="submit"
                          className="btn btn-dark btn-block btn-rounded"
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
