import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReusableForm, { FormField } from "../../../components/reusableform";
import { getCandidate, getCandidateAllPosts, objectToArray, putAdmin } from "../../../helper/helper";
import Profile from "../../../components/profile";
import Carousel from "../../../components/carousel";


const EditCandidateForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [userData, setUserData] = useState<any>(false);
    const [data, setData] = useState<any[]>([]);

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

    // data.forEach(element => {
    //     setData([...data,element])
    // });

    // const handleEditProfile = async (formData: { [key: string]: string }) => {
    // console.log("edit admin profile Data:", formData);
    // try {
    //     console.log(formData);

    //     const data = await putAdmin(formData);
    //     console.log(data);
    //     // navigate('/ManageProfile');
    // } catch (error) {
    //     console.log(error);
    // }
    // };\
    console.log(data.map(f => ({ image: f.image, postId: f.postId })));
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
            </div>
        </>
    );
};

export default EditCandidateForm;
