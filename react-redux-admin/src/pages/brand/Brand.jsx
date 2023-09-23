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
  deleteBrand,
} from "../../features/product/productApiSlice";
import { setMessageEmpty } from "../../features/product/productSlice";
import swal from "sweetalert";

const Brand = () => {
  const cols = [
    {
      name: "Brand Logo",
      selector: (row) => (
        <img
          style={{
            height: "50px",
            margin: "10px",
            objectFit: "cover",
          }}
          src={row.logo}
        />
      ),
    },
    {
      name: "Brand Name",
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
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleBrandDelete(row._id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </>
      ),
    },
  ];

  const { error, message, brand, loader } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const [logo, setLogo] = useState(null);
  const [logoPrev, setLogoprev] = useState(null);
  const [search, setSearch] = useState("");

  const { input, handleInputChange, resetForm } = useFormFields({
    name: "",
  });

  // handle logo preview
  const handleLogoPreview = (e) => {
    setLogo(e.target.files[0]);
    setLogoprev(URL.createObjectURL(e.target.files[0]));
  };

  // handle brand delete
  const handleBrandDelete = (id) => {
    swal({
      title: "Danger",
      text: "Are you sure ? ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  // handle brand create
  const handleBrandCreate = (e) => {
    e.preventDefault();

    const form_data = new FormData();

    form_data.append("name", input.name);
    form_data.append("logo", logo);

    dispatch(createBrand(form_data));

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
      <PageHeader title="Brand" />

      <ModalPopup target="brandModalPopup">
        <form onSubmit={handleBrandCreate}>
          <div className="my-3">
            <label htmlFor="">Brand Name </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="my">
            <img className="w-100" src={logoPrev} alt="" />
          </div>

          <div className="my-3">
            <label htmlFor="">Brand Logo </label>
            <input
              type="file"
              className="form-control"
              name="logo"
              onChange={(e) => handleLogoPreview(e)}
            />
          </div>

          <div className="my-3">
            <button className="btn btn-primary btn-block" type="submit">
              {loader ? "Adding ...." : "Add new Brand"}
            </button>
          </div>
        </form>
      </ModalPopup>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            data-target="#brandModalPopup"
            data-toggle="modal"
          >
            Add new brand
          </button>
          <br />
          <br />
          <DataTable
            className="shadow-sm wolmart-table"
            title="All Brands Data"
            columns={cols}
            data={brand ? brand : []}
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

export default Brand;
