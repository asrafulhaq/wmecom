import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import ShopSingle from "../pages/shop/single/ShopSingle";

// create public router
const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:id",
    element: <ShopSingle />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];

// export router
export default publicRouter;
