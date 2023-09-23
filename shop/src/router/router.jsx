import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privateRouter from "./privateRouter";
import Layouts from "../layouts/Layouts";

// create browser router
const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [...publicRouter, ...privateRouter],
  },
]);

// export router
export default router;
