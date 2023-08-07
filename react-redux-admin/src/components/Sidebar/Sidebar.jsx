import { Link, useLocation } from "react-router-dom";
import useAuthUser from "../../hooks/useAuthUser";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuthUser();

  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>

              {user?.role?.permissions?.includes("Dashboard") && (
                <li className={`${location.pathname === "/" ? "active" : ""}`}>
                  <Link to="/">
                    <i className="fe fe-home"></i> <span>Dashboard</span>
                  </Link>
                </li>
              )}

              {user?.role?.permissions?.includes("Orders") && (
                <li className="">
                  <Link to="/users">
                    <i className="fe fe-bolt"></i> <span>Orders</span>
                  </Link>
                </li>
              )}

              {user?.role?.permissions?.includes("Products") && (
                <li className="">
                  <Link to="/users">
                    <i className="fe fe-bolt"></i> <span>Products</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Category") && (
                <li className="">
                  <Link to="/users">
                    <i className="fe fe-bolt"></i> <span>Category</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Tag") && (
                <li className="">
                  <Link to="/users">
                    <i className="fe fe-bolt"></i> <span>Tag</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Brands") && (
                <li className="">
                  <Link to="/users">
                    <i className="fe fe-bolt"></i> <span>Brands</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Users") && (
                <li
                  className={`${
                    location.pathname === "/users" ? "active" : ""
                  }`}
                >
                  <Link to="/users">
                    <i className="fe fe-user"></i> <span>Users</span>
                  </Link>
                </li>
              )}

              {user?.role?.permissions?.includes("Roles") && (
                <li
                  className={`${location.pathname === "/role" ? "active" : ""}`}
                >
                  <Link to="/role">
                    <i className="fa fa-anchor"></i> <span>Roles</span>
                  </Link>
                </li>
              )}
              {user?.role?.permissions?.includes("Permission") && (
                <li
                  className={`${
                    location.pathname === "/permission" ? "active" : ""
                  }`}
                >
                  <Link to="/permission">
                    <i className="fa fa-lock"></i> <span>Permissions</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
