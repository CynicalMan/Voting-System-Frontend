import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "../../../components/profile";
import { objectToArray } from "../../../helper/helper";


type ViewCandidateProfileProps = {};

const ViewCandidateProfile: React.FC<ViewCandidateProfileProps> = () => {

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
        
        const response = await fetch(`https://localhost:7285/api/Admin/GetAllCandidates?name=${id?.split(' ')[0]}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Admin details');
        }
        console.log(id);
        
        const data = await response.json();
        console.log(data);
        
        setImage(data[0].imageProile)
        setAdmin(objectToArray(data[0]));
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, [id]);

  const adminWithoutImage = admin?.filter(k => k.key !== "imageProile")


  console.log(admin);


    console.log(id?.split(' ')[0]);

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

export default ViewCandidateProfile;
