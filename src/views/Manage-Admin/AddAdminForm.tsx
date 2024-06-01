import React from 'react';
import ReusableForm from '../../components/reusableform';
import { useNavigate } from 'react-router-dom';
import { postAdmin } from '../../helper/helper';

const AddAdminForm: React.FC = () => {

  const navigate = useNavigate();

  const fields = [
    { name: 'Name', label: 'Name', type: 'text', placeholder: 'Enter new admin Name.' },
    { name: 'gender', label: 'Gender', type: 'select', placeholder: 'Please select your gender.',options:[
      { value: '0', label: 'Male' },
      { value: '1', label: 'Female' },
    ] },
    { name: 'DateOfBirth', label: 'Birthday', type: 'date' },
    { name: 'SSN', label: 'SSN', type: 'text', placeholder: 'Enter SSN' },
    { name: 'Email', label: 'Email', type: 'email', placeholder: 'Enter new admin email.' },
    { name: 'City', label: 'City', type: 'text', placeholder: 'Enter City' },
    { name: 'Password', label: 'Password', type: 'password', placeholder: 'Enter new admin password.' },
    { name: 'imageProfile', label: 'Profile Picture', type: 'file'},
    { name: 'ConfirmPassword ', label: 'Confirm Password', type: 'password', placeholder: 'Re-enter new admin password.' },
  ];

  const handleAdmin = async (formData: { [key: string]: string }) => {
    console.log('adding Admin Data:', formData);
    // Handle Admin logic here
    try {
      console.log(formData);
      const data = await postAdmin(formData);
      console.log(data);
      navigate('/ManageAdmin');
    } catch (error) {
      console.log(error);
    }
  };

  return <ReusableForm fields={fields} onSubmit={handleAdmin} submitButtonText="Add" memberList={false} className={'admin-form'} />;
};

export default AddAdminForm;
