import React, { useEffect, useState } from "react";
import Profile from "../../components/profile";
import SearchBar from "../../components/searchbar";
import {  useNavigate, useParams } from "react-router-dom";
import { objectToArray } from "../../helper/helper";

type ViewUserProfileProps = {};

const ViewUserProfile: React.FC<ViewUserProfileProps> = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const { id } = useParams<{ id: string }>();
  const [admin, setAdmin] = useState<any>(null);
  const [image, setImage] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

//   NOTE : useEffect for the AdminDetails api

useEffect(() => {
    const fetchAdminDetails = async () => {
        try {
            
            console.log(id);
            const response = await fetch(`https://localhost:7285/api/Admin/GetUserById/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch Admin details');
            }
            const data = await response.json();
            console.log(data);
            
            setImage(data.imageProile)
            setAdmin(objectToArray(data));
        } catch (err:any) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    fetchAdminDetails();
}, [id]);

    const adminWithoutImage = admin?.filter(k => k.key !== "imageProile")

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

export default ViewUserProfile;
