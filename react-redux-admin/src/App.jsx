import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "./features/auth/authApiSlice";
import {
  getAllPermission,
  getAllRoles,
  getAllUser,
} from "./features/user/userApiSlice";
import {
  getAllBrand,
  getProductTCategories,
  getProductTags,
} from "./features/product/productApiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(getLoggedInUser());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPermission());
    dispatch(getAllRoles());
    dispatch(getAllUser());
    dispatch(getAllBrand());
    dispatch(getProductTags());
    dispatch(getProductTCategories());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
