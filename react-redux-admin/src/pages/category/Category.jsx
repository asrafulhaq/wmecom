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
  createProductCategories,
  deleteBrand,
} from "../../features/product/productApiSlice";
import { setMessageEmpty } from "../../features/product/productSlice";
import swal from "sweetalert";

const Category = () => {
  const cols = [
    {
      name: "Photo",
      selector: (row) => (
        <img
          style={{
            height: "50px",
            margin: "10px",
            objectFit: "cover",
          }}
          src={row.photo}
        />
      ),
    },
    {
      name: "Category Name",
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

  const { error, message, category, loader } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [catPrev, setCatPrev] = useState("");

  const { input, handleInputChange, resetForm } = useFormFields({
    name: "",
    parent: "",
    icon: "",
  });

  // handle cat preview
  const handleCatPreview = (e) => {
    setCatPrev(e.target.files[0]);
  };

  // handle create category
  const handleCreateCategory = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input.name);
    form_data.append("icon", input.icon);
    form_data.append("parentCategory", input.parent);
    form_data.append("catPhoto", catPrev);

    dispatch(createProductCategories(form_data));
    resetForm();
  };

  console.log(catPrev);

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
      <PageHeader title="Brand" />

      <ModalPopup target="catModalPopup">
        <form onSubmit={handleCreateCategory}>
          <div className="my-3">
            <label htmlFor="">Category Name </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-3">
            <label htmlFor="">Parent Name </label>
            <select
              name="parent"
              className="form-control"
              value={input.parent}
              onChange={handleInputChange}
              id=""
            >
              <option value="">-select-</option>
              {category?.map((pcat, index) => {
                return (
                  <option value={pcat._id} key={index}>
                    {pcat.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="my-3">
            <label htmlFor="">Category Icon </label>
            <input
              type="text"
              className="form-control"
              name="icon"
              value={input.icon}
              onChange={handleInputChange}
            />
          </div>

          <div className="my">
            <img
              className="w-100"
              src={catPrev && URL.createObjectURL(catPrev)}
              alt=""
            />
          </div>

          <div className="my-3">
            <label htmlFor="">Category Photo </label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleCatPreview(e)}
              name="catPhoto"
            />
          </div>

          <div className="my-3">
            <button className="btn btn-primary btn-block" type="submit">
              {loader ? "Adding ...." : "Add new Category"}
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            data-target="#catModalPopup"
            data-toggle="modal"
          >
            Add new Category
          </button>
          <br />
          <br />

          <DataTable
            className="shadow-sm wolmart-table"
            title="All Brands Data"
            columns={cols}
            data={category ? category : []}
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

export default Category;
