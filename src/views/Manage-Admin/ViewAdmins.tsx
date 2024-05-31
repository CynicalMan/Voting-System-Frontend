// {/* <table className="table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Replace with actual data mapping */}
//             {[].map((Admin) => (
//               <tr key={Admin.id}>
//                 <td>{Admin.id}</td>
//                 <td>{Admin.title}</td>
//                 <td>
//                   <Link to={`${Admin.id}`} className="btn btn-info">
//                     View
//                   </Link>
//                   <Link
//                     to={`delete/${Admin.id}`}
//                     className="btn btn-secondary me-2"
//                   >
//                     Delete
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table> */}

import { Link } from "react-router-dom";
import DataTable from "../../components/datatable";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import AddIcon from '../../assets/add.png'
import { getAdmins } from "../../helper/helper";

const ViewAdmins: React.FC = () => {

  const columns = [
    { header: 'Admin Id', accessor: 'adminId' },
    { header: 'Name', accessor: 'name' },
  ];

  const data = [
    { id: 20201, name: 'John Doe' },
    { id: 20202,  name: 'Jane Smith'},
    { id: 20203, name: 'Jane11 Smith'},
  ];
  
  const [admin, setAdmin] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the UserDetails api
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getAdmins();
        console.log(data);
        setAdmin(data);
      } catch (err:any) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);


  return (
    <div className="test p-2">
      {admin&&<DataTable columns={columns} data={admin} showActions={true} routes={{
        viewRoute: "ViewAdminProfile",
        deleteRoute: "DeleteAdmin"
      }} deleteText={"Are you sure you want to delete this admin?"} />}
      <div className="text-center">
        <Link to={`AddAdmin`} className="btn ">
          <img src={AddIcon} width={66} height={66} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewAdmins;
