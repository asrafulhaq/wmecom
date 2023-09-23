import banner1 from "../../assets/images/shop/banner1.jpg";
import ShopPageSidebar from "../../components/ShopPageSidebar/ShopPageSidebar";
import Product from "../../components/product/Product";

const Shop = () => {
  return (
    <>
      <main className="main">
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="shop-banner-sidebar.html">Shop</a>
              </li>
              <li>3 Columns</li>
            </ul>
          </div>
        </nav>

        <div className="page-content">
          <div className="container">
            <div
              className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
              style={{
                backgroundImage: `url('${banner1}')`,
                backgroundColor: "#ffc74e",
              }}
            >
              <div className="banner-content">
                <h4 className="banner-subtitle font-weight-bold">
                  Accessories Collection
                </h4>
                <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">
                  Smart Wrist Watches
                </h3>
                <a
                  href="shop-banner-sidebar.html"
                  className="btn btn-dark btn-rounded btn-icon-right"
                >
                  Discover Now<i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="shop-content row gutter-lg mb-10">
              <ShopPageSidebar />

              <div className="main-content">
                {/* <nav className="toolbox sticky-toolbox sticky-content fix-top">
                  <div className="toolbox-left">
                    <a
                      href="#"
                      className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle btn-icon-left d-block d-lg-none"
                    >
                      <i className="w-icon-category"></i>
                      <span>Filters</span>
                    </a>
                    <div className="toolbox-item toolbox-sort select-box text-dark">
                      <label>Sort By :</label>
                      <select name="orderby" className="form-control">
                        <option value="default" selected="selected">
                          Default sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price-low">
                          Sort by pric: low to high
                        </option>
                        <option value="price-high">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="toolbox-right">
                    <div className="toolbox-item toolbox-show select-box">
                      <select name="count" className="form-control">
                        <option value="9">Show 9</option>
                        <option value="12" selected="selected">
                          Show 12
                        </option>
                        <option value="24">Show 24</option>
                        <option value="36">Show 36</option>
                      </select>
                    </div>
                    <div className="toolbox-item toolbox-layout">
                      <a
                        href="shop-banner-sidebar.html"
                        className="icon-mode-grid btn-layout active"
                      >
                        <i className="w-icon-grid"></i>
                      </a>
                      <a
                        href="shop-list.html"
                        className="icon-mode-list btn-layout"
                      >
                        <i className="w-icon-list"></i>
                      </a>
                    </div>
                  </div>
                </nav> */}

                <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                  <Product />
                </div>

                <div className="toolbox toolbox-pagination justify-content-between">
                  <p className="showing-info mb-2 mb-sm-0">
                    Showing<span>1-12 of 60</span>Products
                  </p>
                  <ul className="pagination">
                    <li className="prev disabled">
                      <a
                        href="#"
                        aria-label="Previous"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        <i className="w-icon-long-arrow-left"></i>Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="next">
                      <a href="#" aria-label="Next">
                        Next<i className="w-icon-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
