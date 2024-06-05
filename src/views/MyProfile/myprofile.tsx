import React, { useEffect, useState } from "react";
import Profile from "../../components/profile";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/edit.png"
import { objectToArray } from "../../helper/helper";

type MyProfileProps = {};

const MyProfile: React.FC<MyProfileProps> = () => {

  const [admin, setAdmin] = useState<any>(null);
  const [image, setImage] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the AdminDetails api
  //TODO get id from local storage
  const id = "e45787fb-f279-4b28-b102-3ea305471a27";
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


  return (
      <div className="test py-2 pb-3">
        <Profile data={adminWithoutImage} image={image} />
        <div className="text-center">
          <Link to={`EditProfile`} className="btn secondary-bg mt-3 py-1">
            <span>Edit</span> <img className="mb-1" src={EditIcon} width={16} height={16} alt="" />
          </Link>
        </div>
      </div>
  );
};

export default MyProfile;
