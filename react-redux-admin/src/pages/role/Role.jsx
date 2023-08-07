import { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import DataTables from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPermissionData,
  setMessageEmpty,
} from "../../features/user/userSlice";
import { createToast } from "../../utils/toast";

import { createRole, updateRole } from "../../features/user/userApiSlice";
import { timeAgo } from "../../helpers/helpers";

const Role = () => {
  const dispatch = useDispatch();
  const { permission, role, error, message } =
    useSelector(getAllPermissionData);

  const [selected, setSelected] = useState([]);

  const { input, handleInputChange, resetForm } = useFormFields({
    name: "",
  });
  const [roleEdit, setRoleEdit] = useState({});

  const handleCheckboxChange = (e) => {
    const val = e.target.value;
    const updateList = [...selected];

    if (selected.includes(val)) {
      updateList.splice(selected.indexOf(val), 1);
    } else {
      updateList.push(val);
    }

    setSelected(updateList);
  };

  const handleRoleCreate = (e) => {
    e.preventDefault();

    dispatch(
      createRole({
        name: input.name,
        permissions: [...selected],
      })
    );

    resetForm();
    setSelected([]);
  };

  const handleRoleEdit = (id) => {
    const editData = role.find((data) => data._id === id);
    setRoleEdit(editData);
    setSelected(editData.permissions);
  };

  const handleEditRoleChange = (e) => {
    setRoleEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleUpdate = (e) => {
    e.preventDefault();

    dispatch(
      updateRole({
        id: roleEdit._id,
        name: roleEdit.name,
        permissions: selected,
      })
    );
  };

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

  useEffect(() => {
    new DataTables(".datatable");
  });
  return (
    <>
      <PageHeader title="Roles" />

      <ModalPopup target="roleModalPopup">
        <form onSubmit={handleRoleCreate}>
          <div className="my-3">
            <label htmlFor="">Role Name {input.name}</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Permissions</label>

            {permission?.map((item, index) => {
              return (
                <label
                  key={index}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    value={item.name}
                    checked={selected.includes(item.name)}
                    onChange={handleCheckboxChange}
                  />

                  <span>{item.name}</span>
                </label>
              );
            })}
          </div>
          <div className="my-3">
            <button className="btn btn-primary btn-block" type="submit">
              Add new Role
            </button>
          </div>
        </form>
      </ModalPopup>

      <ModalPopup target="roleEdit">
        <form onSubmit={handleRoleUpdate}>
          <div className="my-3">
            <label htmlFor="">Role Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={roleEdit.name}
              onChange={handleEditRoleChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Permissions</label>

            {permission?.map((item, index) => {
              return (
                <label
                  key={index}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    value={item.name}
                    checked={selected?.includes(item.name)}
                    onChange={handleCheckboxChange}
                  />

                  <span>{item.name}</span>
                </label>
              );
            })}
          </div>
          <div className="my-3">
            <button className="btn btn-primary btn-block" type="submit">
              Add new Role
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            data-target="#roleModalPopup"
            data-toggle="modal"
          >
            Add new role
          </button>
          <br />
          <br />
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                {role && (
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Role Name</th>
                        <th>Slug</th>
                        <th>Permissions</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {role?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ width: "50px" }}>{index + 1}</td>
                            <td>{item.name} </td>
                            <td>{item.slug} </td>
                            <td>
                              <ul>
                                {item.permissions.map((per, index) => {
                                  return <li key={index}>{per}</li>;
                                })}
                              </ul>
                            </td>
                            <td>{timeAgo(item.createdAt)}</td>
                            <td>
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
                                onClick={() => handleRoleEdit(item._id)}
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

export default Role;
