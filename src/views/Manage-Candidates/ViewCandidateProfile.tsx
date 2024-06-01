import React, { useEffect, useState } from "react";
import Profile from "../../components/profile";
import SearchBar from "../../components/searchbar";
import {  useNavigate, useParams } from "react-router-dom";
import { objectToArray } from "../../helper/helper";

type ViewCandidateProfileProps = {};

const ViewCandidateProfile: React.FC<ViewCandidateProfileProps> = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const { id } = useParams<{ id: string }>();
  const [admin, setAdmin] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

//   NOTE : useEffect for the AdminDetails api

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7285/api/Admin/GetCandidateById/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Admin details');
          
        }
        
        const data = await response.json();
        setAdmin(data);
        setAdmin(objectToArray(data));
        console.log(data);
      } catch (err:any) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, [id]);

  console.log(id);
  

    // const data = [
    //     { key: "Admin ID", value: "20202" },
    //     { key: "Name", value: "Mostafa Mohamed" },
    //     { key: "Birthday", value: "20 March 2000" },
    //     { key: "Gender", value: "Male" },
    //     { key: "City", value: "Giza" },
    //     { key: "Email", value: "Mostafamohamed1@gmail.com" },
    // ];

    // console.log(data);
    return (
        <div>
        <div className="test py-2 pb-3">
            <Profile data={admin} />
            <div className="text-center">
            <button
                onClick={handleBack}
                className="btn secondary-bg text-black"
                >
                Back
            </button>
            </div>
        </div>
        </div>
    );
};

export default ViewCandidateProfile;
