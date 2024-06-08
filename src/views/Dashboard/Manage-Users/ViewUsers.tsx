import { useState, useEffect } from "react";
import DataTable from "../../../components/datatable";
import { getUsers } from "../../../helper/helper";



const ViewUsers: React.FC = () => {

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reload , setReload] = useState<boolean>(false);
  // NOTE : useEffect for the UserDetails api
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getUsers();
        console.log(data);
        setUser(data);
      } catch (err:any) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
        setReload(true);
      }
    };
    fetchUserDetails();
  }, [reload]);


  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'National ID(SSN)', accessor: 'ssn' },
  ];


  return (
    <div className="test p-2">
      {user&&<DataTable id="voterId" columns={columns} data={user} showActions routes={{
        viewRoute: "ViewUserProfile",
        deleteRoute: "DeleteUser"
      }} deleteText={"Are you sure you want to delete this user?"} hasEdit={false} />}
    </div>
  );
};

export default ViewUsers;
