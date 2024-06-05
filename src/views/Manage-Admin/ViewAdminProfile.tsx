import React, { Component, useEffect, useState } from "react";
import Profile from "../../components/profile";
import SearchBar from "../../components/searchbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { objectToArray } from "../../helper/helper";

type ViewAdminProfileProps = {};

const ViewAdminProfile: React.FC<ViewAdminProfileProps> = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const { id } = useParams<{ id: string }>();
  const [admin, setAdmin] = useState<any>(null);
  const [image, setImage] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the AdminDetails api

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7285/api/Admin/GetAdminById/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Admin details');
        }
        const data = await response.json();
        console.log(data.imageProile);
        
        setImage(data.imageProile)
        setAdmin(objectToArray(data));
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, [id]);


  const adminWithoutImage = admin?.filter(k => k.key !== "imageProile")

  console.log(image);
  

  return (
    <div>
      <div className="test py-2 pb-3">
        <Profile data={adminWithoutImage} image={image} />
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

export default ViewAdminProfile;
