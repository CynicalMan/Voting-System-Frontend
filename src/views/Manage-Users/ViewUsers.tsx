
import { Link } from "react-router-dom";
import DataTable from "../../components/datatable";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import AddIcon from "../../assets/add.png"
import { getUsers } from "../../helper/helper";

const ViewUsers: React.FC = () => {

  const data = [
    { name: 'User 1', elections: 'Election name', id: '222' },
    { name: 'User 2', elections: 'Election name', id: '222' },
  ];


  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      }
    };
    fetchUserDetails();
  }, []);


  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Elections', accessor: 'elections' },
    { header: 'National ID(SSN)', accessor: 'ssn' },
  ];

  // const data = [
  //   { name: 'User 1', elections: 'Election name', id: 'User’s SSN' },
  //   { name: 'User 2', elections: 'Election name', id: 'User’s SSN' },
  // ];


  return (
    <div className="test p-2">
      {user&&<DataTable columns={columns} data={user} showActions routes={{
        viewRoute: "ViewUserProfile",
        deleteRoute: "DeleteUser"
      }} deleteText={"Are you sure you want to delete this user?"} />}
    </div>
  );
};

export default ViewUsers;
