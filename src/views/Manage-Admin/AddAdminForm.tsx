import React from 'react';
import ReusableForm from '../../components/reusableform';

const AddAdminForm: React.FC = () => {
  const fields = [
    { name: 'username', label: 'Name', type: 'text', placeholder: 'Enter new admin Name.' },
    { name: 'gender', label: 'Gender', type: 'select', placeholder: 'Please select your gender.',options:[
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ] },
    { name: 'birthday', label: 'Birthday', type: 'date' },
    { name: 'adminId', label: 'Admin Id', type: 'text', placeholder: 'Enter password' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter new admin email.' },
    { name: 'city', label: 'City', type: 'text', placeholder: 'Enter password' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter new admin password.' },
    { name: 'profilePicture', label: 'Profile Picture', type: 'file', placeholder: 'Upload new admin profile picture.' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Re-enter new admin password.' },
  ];

  const handleRegistration = (formData: { [key: string]: string }) => {
    console.log('adding admin Data:', formData);
    // Handle registration logic here
  };

  return <ReusableForm fields={fields} onSubmit={handleRegistration} submitButtonText="Add" />;
};

export default AddAdminForm;
