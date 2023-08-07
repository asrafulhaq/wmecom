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
];

// export router
export default publicRouter;
