import useAuthUser from "../../hooks/useAuthUser";

const PageHeader = ({ title }) => {
  const { user } = useAuthUser();
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Welcome {user?.name}!</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item active">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
