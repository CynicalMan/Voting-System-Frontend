import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "../../../components/profile";
import { objectToArray } from "../../../helper/helper";
import EditIcon from "../../../assets/edit.png"
import { getAuthUser } from "../../../../localStorage";
import axios from "axios";


const MyProfile: React.FC = () => {

  const [admin, setAdmin] = useState<any>(null);
  const [image, setImage] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the AdminDetails api
  const user = getAuthUser()
  console.log(user);
  const token : string = user.token
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(`https://localhost:7285/api/Account/Profile`,{
          headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `bearer ${token}`,  
          }
        });
        if (response.status != 200) {
          throw new Error('Failed to fetch Admin details');
        }
        const data = response.data
        console.log(data);
        
        setImage(data.imageProile)
        setAdmin(objectToArray(data));
      } catch (err:any) {
        setError(err.message);
        console.log(err);
        
      } finally {
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, [token]);

  const adminWithoutImage = admin?.filter(k => k.key !== "imageProile")
  console.log(admin);
  console.log(adminWithoutImage);
  
  

  return (
      <div className="test py-2 pb-3">
        <Profile data={adminWithoutImage} image={image} />
        <div className="d-flex flex-column align-items-center">
          <Link to={`EditProfile`} className="btn secondary-bg mt-3 py-1">
            <span>Edit</span> <img className="mb-1" src={EditIcon} width={16} height={16} alt="" />
          </Link>
          <Link to={`/logout`} className="btn secondary-bg mt-3 py-1">
            <span>Logout</span> <img className="mb-1" src={EditIcon} width={16} height={16} alt="" />
          </Link>
        </div>
      </div>
  );
};

export default MyProfile;
