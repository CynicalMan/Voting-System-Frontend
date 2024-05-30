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
import { useState } from "react";
import Modal from "../../components/modal";
import AddIcon from '../../assets/add.png'

const ViewAdmins: React.FC = () => {

  const columns = [
    { header: 'Admin Id', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
  ];

  const data = [
    { id: 20201, name: 'John Doe' },
    { id: 20202,  name: 'Jane Smith'},
    { id: 20203, name: 'Jane11 Smith'},
  ];

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Changes saved');
    setShowModal(false);
  };

  return (
    <div className="test p-2">
      <DataTable columns={columns} data={data} />
      <div className="text-center">
        <Link to={`AddAdmin`} className="btn ">
          <img src={AddIcon} width={66} height={66} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewAdmins;
