import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCandidate, getCandidateAllPosts, objectToArray } from "../../../../helper/helper";
import Profile from "../../../../components/profile";
import Carousel from "../../../../components/carousel";
import { Link } from "react-router-dom";


const CandidateProfile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(false);
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const handleGetAdminById = async () => {
        try {
            const data = await getCandidateAllPosts();
            const userData = await getCandidate(id);
            console.log(data);
            console.log(userData);

            setUserData(objectToArray(userData[0]))
            setData(data)
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetAdminById();
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    }

    const carouselData = data.map(f => ({ image: f.image, postId: f.postId }))



    return (
        <>
            <div className="test p-4">
                <div className="">
                    <Profile data={userData} />
                </div>
                <div className="mt-5">
                    {!carouselData.length ? (
                        <p className="text-center mt-4">No Posts Found</p>
                    ) : (
                        <Carousel items={carouselData} />
                    )}
                </div>
                <div className="text-center mt-4">
                    <button
                        onClick={handleBack}
                        className="btn secondary-bg text-black"
                    >
                        Back
                    </button>
                </div>
            </div>
        </>
    );
};

export default CandidateProfile;
