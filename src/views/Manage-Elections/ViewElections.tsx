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
import DataList from "../../components/datalist";
import parliament from "../../assets/elections/parliament.png";
import ahly from "../../assets/elections/ahly.png";
import egypt from "../../assets/elections/egypt.png";
import AddIcon from "../../assets/add.png";

const ViewElections: React.FC = () => {
  

  const listData = [
    {
      id: 1,
      image: ahly,
      title: "Al-Ahly Club presidency elections.",
      candidateNum: 3,
    },
    {
      id: 2,
      image: egypt,
      title: "Presidential elections of the Arab Republic of Egypt",
      candidateNum: 4,
    },
    {
      id: 3,
      image: parliament,
      title: `Elections for speaker of the House 
    of Representatives (Egypt)`,
      candidateNum: 3,
    },
  ];

  return (
    <div className="test ">
      <DataList data={listData} deleteText={`Are you sure you want \n to delete this election?`} />
      <div className="text-center">
        <Link to={`AddElection`} className="btn ">
          <img src={AddIcon} width={66} height={66} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewElections;
