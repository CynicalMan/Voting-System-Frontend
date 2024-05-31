import React from 'react';
import ReusableForm from '../../components/reusableform';

const EditProfileForm: React.FC = () => {
  const fields = [
    { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter username' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
  ];

  const handleRegistration = (formData: { [key: string]: string }) => {
    console.log('edit admin profile Data:', formData);
  };

  return <ReusableForm fields={fields} onSubmit={handleRegistration} submitButtonText="Register" />;
};

export default EditProfileForm;
