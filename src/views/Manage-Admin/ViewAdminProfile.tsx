import React, { Component } from "react";
import Profile from "../../components/profile";
import SearchBar from "../../components/searchbar";
import { Link, useParams } from "react-router-dom";

type ViewAdminProfileProps = {};

const ViewAdminProfile: React.FC<ViewAdminProfileProps> = () => {

  const { id } = useParams<{ id: string }>();
  // const [admin, setAdmin] = useState<any>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the AdminDetails api

  // useEffect(() => {
  //   const fetchAdminDetails = async () => {
  //     try {
  //       const response = await fetch(`/api/Admins/${id}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch Admin details');
  //       }
  //       const data = await response.json();
  //       setAdmin(data);
  //     } catch (err:any) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAdminDetails();
  // }, [id]);


  const data = [
    { key: "Admin ID", value: "20202" },
    { key: "Name", value: "Mostafa Mohamed" },
    { key: "Birthday", value: "20 March 2000" },
    { key: "Gender", value: "Male" },
    { key: "City", value: "Giza" },
    { key: "Email", value: "Mostafamohamed1@gmail.com" },
  ];

  console.log(id);
  

  return (
    <div>
      <div className="test py-2 pb-3">
        <Profile data={data} />
        <div className="text-center">
          <Link to={`AddAdmin`} className="btn secondry-bg mt-3 py-1">
            <span>Back</span> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewAdminProfile;
