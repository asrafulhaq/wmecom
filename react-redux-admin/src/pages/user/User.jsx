import { useEffect } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import DataTables from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import { generateRandomPassword, timeAgo } from "../../helpers/helpers";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { userCreate } from "../../features/user/userApiSlice";
import { createToast } from "../../utils/toast";
import { setMessageEmpty } from "../../features/user/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const { user, role, error, message } = useSelector((state) => state.user);

  const { input, handleInputChange, resetForm, setInput } = useFormFields({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleRandomPassword = (e) => {
    e.preventDefault();
    const rp_pass = generateRandomPassword(20);
    setInput((prevState) => ({
      ...prevState,
      password: rp_pass,
    }));
  };

  const handleUserCreate = (e) => {
    e.preventDefault();
    dispatch(userCreate(input));
    resetForm();
  };

  useEffect(() => {
    new DataTables(".datatable");
  });

  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);

  return (
    <>
      <PageHeader title="Users" />

      <ModalPopup target="userModalPopup">
        <form onSubmit={handleUserCreate}>
          <div className="my-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={input.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={input.password}
              onChange={handleInputChange}
            />
            <a
              className="badge badge-info text-light"
              onClick={handleRandomPassword}
            >
              Random Password
            </a>
          </div>

          <div className="y-3">
            <select
              className="form-control"
              name="role"
              value={input.role}
              onChange={handleInputChange}
            >
              <option value="">-select-</option>
              {role?.map((item, index) => {
                return (
                  <option value={item._id} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="my-3">
            <button type="submit" className="btn btn-primary">
              Create new user
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            data-target="#userModalPopup"
            data-toggle="modal"
          >
            Add new user
          </button>
          <br />
          <br />
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                {user && (
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td> {item.email} </td>
                            <td>{item?.role?.name}</td>
                            <td>{timeAgo(item.createdAt)} </td>
                            <td className="text-right">
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_1"
                                  className="check"
                                  checked={true}
                                />
                                <label
                                  htmlFor="status_1"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td className="text-right">
                              <button
                                className="btn btn-sm btn-warning mr-1"
                                data-toggle="modal"
                                data-target="#roleEdit"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button className="btn btn-sm btn-danger">
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
