import React, { useEffect, useState } from "react";
import ReusableForm, {FormField} from "../../components/reusableform";
import { getAdmin, getCandidate, getCandidateAllPosts, putAdmin } from "../../helper/helper";
import { useParams } from "react-router-dom";

const EditProfileForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
const [formValues, setFormValues] = useState<{ [key: string]: string }>({
    name: "",
    ssn: "",
    gender: "",
    email: "",
    city: "",
    dateOfBirth: "",
    imageProile: "",
});

  // const [filteredFields, setFilteredFields] = useState<FormField[]>([]);
    const [showForm, setShowForm] = useState<boolean>(false);

    const fields: FormField[] = [
        { name: "imageProile", label: "Profile Picture", type: "file", value: "" },
    ];

    //TODO get the id from local storage after auth
    
    const handleGetAdminById = async () => {
        console.log("edit admin profile Data:", id);
        try {
        const data = await getCandidateAllPosts();
        console.log(data);

        setFormValues(data);
        // navigate("/ManageElections")
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        handleGetAdminById();
    }, [id]);

    console.log(formValues);

const handleEditProfile = async (formData: { [key: string]: string }) => {
    console.log("edit admin profile Data:", formData);
    try {
        console.log(formData);

        const data = await putAdmin(formData);
        console.log(data);
        // navigate('/ManageProfile');
    } catch (error) {
        console.log(error);
    }
};

    return (
        <>
            {!formValues ? (
                <p className="text-center mt-4">No Posts Found</p>
            ) : (
                <ReusableForm
                fields={fields}
                initialData={formValues}
                className="admin-form"
                onSubmit={handleEditProfile}
                submitButtonText="Edit Candidate Image"
                isEditForm={true}
                />
            )}
        </>
    );
};

export default EditProfileForm;
