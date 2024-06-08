import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../../components/datatable";
import { getAdmins } from "../../../helper/helper";
import AddIcon from "../../../assets/add.png"


const ViewAdmins: React.FC = () => {

  const columns = [
    { header: 'Admin Id', accessor: 'adminId' },
    { header: 'Name', accessor: 'name' },
  ];

  const [admin, setAdmin] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reload , setReload] = useState<boolean>(false);

  // NOTE : useEffect for the UserDetails api
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getAdmins();
        console.log(data);
        setAdmin(data);
        setReload(true);
      } catch (err:any) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
        console.log(reload);

      }
    };
    fetchUserDetails();
  }, [reload]);

  console.log(admin);
  
  return (
    <div className="test p-2">
      {admin&&<DataTable id="adminId" columns={columns} data={admin} showActions={true} routes={{
        viewRoute: "ViewAdminProfile",
        deleteRoute: "DeleteAdmin"
      }} deleteText={"Are you sure you want to delete this admin?"} hasEdit={false} />}
      <div className="text-center">
        <Link to={`AddAdmin`} className="btn ">
          <img src={AddIcon} width={66} height={66} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewAdmins;
