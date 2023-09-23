import Footerlogo from "../../assets/images/logo_footer.png";
import paymentIcon from "../../assets/images/payment.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-newsletter bg-primary">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="icon-box icon-box-side text-white">
                  <div className="icon-box-icon d-inline-flex">
                    <i className="w-icon-envelop3"></i>
                  </div>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title text-white text-uppercase font-weight-bold">
                      Subscribe To Our Newsletter
                    </h4>
                    <p className="text-white">
                      Get all the latest information on Events, Sales and
                      Offers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0">
                <form
                  action="#"
                  method="get"
                  className="input-wrapper input-wrapper-inline input-wrapper-rounded"
                >
                  <input
                    type="email"
                    className="form-control mr-2 bg-white"
                    name="email"
                    id="email"
                    placeholder="Your E-mail Address"
                  />
                  <button className="btn btn-dark btn-rounded" type="submit">
                    Subscribe<i className="w-icon-long-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget-about">
                  <a href="demo1.html" className="logo-footer">
                    <img
                      src={Footerlogo}
                      alt="logo-footer"
                      width="144"
                      height="45"
                    />
                  </a>
                  <div className="widget-body">
                    <p className="widget-about-title">
                      Got Question? Call us 24/7
                    </p>
                    <a href="tel:18005707777" className="widget-about-call">
                      1-800-570-7777
                    </a>
                    <p className="widget-about-desc">
                      Register now to get updates on pronot get up icons &
                      coupons ster now toon.
                    </p>

                    <div className="social-icons social-icons-colored">
                      <a
                        href="#"
                        className="social-icon social-facebook w-icon-facebook"
                      ></a>
                      <a
                        href="#"
                        className="social-icon social-twitter w-icon-twitter"
                      ></a>
                      <a
                        href="#"
                        className="social-icon social-instagram w-icon-instagram"
                      ></a>
                      <a
                        href="#"
                        className="social-icon social-youtube w-icon-youtube"
                      ></a>
                      <a
                        href="#"
                        className="social-icon social-pinterest w-icon-pinterest"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h3 className="widget-title">Company</h3>
                  <ul className="widget-body">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="#">Team Member</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Affilate</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="cart.html">View Cart</a>
                    </li>
                    <li>
                      <a href="login.html">Sign In</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="wishlist.html">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Payment Methods</a>
                    </li>
                    <li>
                      <a href="#">Money-back guarantee!</a>
                    </li>
                    <li>
                      <a href="#">Product Returns</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Term and Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-left">
              <p className="copyright">
                Copyright © 2021 Wolmart Store. All Rights Reserved.
              </p>
            </div>
            <div className="footer-right">
              <span className="payment-label mr-lg-8">
                We re using safe payment for
              </span>
              <figure className="payment">
                <img src={paymentIcon} alt="payment" width="159" height="25" />
              </figure>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
