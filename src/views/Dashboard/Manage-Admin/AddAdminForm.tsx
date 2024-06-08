import { useNavigate } from "react-router-dom";
import ReusableForm from "../../../components/reusableform";
import { postAdmin } from "../../../helper/helper";


const AddAdminForm: React.FC = () => {

  const navigate = useNavigate();

  const fields = [
    { name: 'Name', label: 'Name', type: 'text', placeholder: 'Enter new admin Name.',value: '' },
    { name: 'gender', label: 'Gender', type: 'select', placeholder: 'Please select your gender.',options:[
      { value: '0', label: 'Male' },
      { value: '1', label: 'Female' },
    ] ,value: ''},
    { name: 'DateOfBirth', label: 'Birthday', type: 'date',value: '' },
    { name: 'SSN', label: 'SSN', type: 'text', placeholder: 'Enter SSN',value: '' },
    { name: 'Email', label: 'Email', type: 'email', placeholder: 'Enter new admin email.',value: '' },
    { name: 'City', label: 'City', type: 'text', placeholder: 'Enter City',value: '' },
    { name: 'Password', label: 'Password', type: 'password', placeholder: 'Enter new admin password.',value: '' },
    { name: 'imageProfile', label: 'Profile Picture', type: 'file',value: ''},
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Re-enter new admin password.',value: '' },
  ];

  const handleAdmin = async (formData: { [key: string]: string }) => {
    console.log('adding Admin Data:', formData);
    // Handle Admin logic here
    try {
      console.log(formData);
      // console.log(formData.get("Name"));
      
      const data = await postAdmin(formData);
      console.log(data);
      navigate('/Dashboard/ManageAdmin');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(fields);
  

  return <ReusableForm fields={fields} onSubmit={handleAdmin} submitButtonText="Add" memberList={false} isEditForm={false} className={'admin-form'} />;
};

export default AddAdminForm;