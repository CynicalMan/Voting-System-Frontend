import React from 'react';
import ReusableForm from '../../components/reusableform';

const AddElectionForm: React.FC = () => {
  const fields = [
    { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter a title to your election.' },
    { name: 'electionDate', label: 'Election End Date', type: 'date' },
    { name: 'electionPicture', label: 'Election Picture', type: 'file', placeholder: 'Upload new admin profile picture.' },
  ];

  const handleRegistration = (formData: { [key: string]: string }) => {
    console.log('adding election Data:', formData);
    // Handle registration logic here
  };

  return <ReusableForm fields={fields} onSubmit={handleRegistration} submitButtonText="Add" />;
};

export default AddElectionForm;
