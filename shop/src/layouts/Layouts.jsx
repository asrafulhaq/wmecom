import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
