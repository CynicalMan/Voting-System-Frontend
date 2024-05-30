import React from 'react';
import ReusableForm from '../../components/reusableform';

const AddCandidateForm: React.FC = () => {
  const fields = [
    { name: 'username', label: 'Name', type: 'text', placeholder: 'Enter new candidate Name.' },
    { name: 'gender', label: 'Gender', type: 'select', placeholder: 'Please select your gender.',options:[
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ] },
    { name: 'birthday', label: 'Birthday', type: 'date' },
    { name: 'candidateId', label: 'Candidate ID', type: 'text', placeholder: 'Enter new candidate ID.' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter new candidate email.' },
    { name: 'city', label: 'City', type: 'text', placeholder: 'Enter password' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter new candidate password.' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Re-enter new candidate password.' },
  ];

  const handleRegistration = (formData: { [key: string]: string }) => {
    console.log('adding candidate Data:', formData);
    // Handle registration logic here
  };

  return <ReusableForm fields={fields} onSubmit={handleRegistration} submitButtonText="Add" />;
};

export default AddCandidateForm;
