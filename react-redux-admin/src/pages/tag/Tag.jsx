import { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { createToast } from "../../utils/toast";
import { timeAgo } from "../../helpers/helpers";
import {
  createBrand,
  createProductTag,
  deleteBrand,
} from "../../features/product/productApiSlice";
import { setMessageEmpty } from "../../features/product/productSlice";
import swal from "sweetalert";

const Tag = () => {
  const cols = [
    {
      name: "Tag Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },
    {
      name: "Created At",
      selector: (row) => timeAgo(row.createdAt),
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="status-toggle">
          <input
            type="checkbox"
            id="status_1"
            className="check"
            checked={true}
          />
          <label htmlFor="status_1" className="checktoggle">
            checkbox
          </label>
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <>
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
        </>
      ),
    },
  ];

  const { error, message, tag, loader } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { input, handleInputChange, resetForm } = useFormFields({
    name: "",
  });

  // handle tag create
  const handleTagCreate = (e) => {
    e.preventDefault();

    dispatch(createProductTag({ name: input.name }));
    resetForm();
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

  return (
    <>
      <PageHeader title="Tag" />

      <ModalPopup target="tagModalPopup">
        <form onSubmit={handleTagCreate}>
          <div className="my-3">
            <label htmlFor="">Tag Name </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-3">
            <button className="btn btn-primary btn-block" type="submit">
              {loader ? "Adding ...." : "Add new Tag"}
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            data-target="#tagModalPopup"
            data-toggle="modal"
          >
            Add new Tag
          </button>
          <br />
          <br />

          <DataTable
            className="shadow-sm wolmart-table"
            title="All Brands Data"
            columns={cols}
            data={tag ? tag : []}
            selectableRows
            highlightOnHover
            pagination
            pointerOnHover
            fixedHeader
            subHeader
            subHeaderComponent={
              <input
                type="search"
                className="form-control"
                style={{ width: "200px" }}
                placeholder="Search ..."
                value={search}
              />
            }
          />
        </div>
      </div>
    </>
  );
};

export default Tag;
