import React from 'react';
import ReusableForm from '../../components/reusableform';

const AddElectionForm: React.FC = () => {
  const fields = [
    { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter a title to your election.' },
    { name: 'member 1', label: 'Election Members', type: 'text', placeholder: 'Enter member 1' },
    { name: 'member 2', label: '', type: 'text', placeholder: 'Enter member 2.' },
    { name: 'electionPicture', label: 'Election Picture', type: 'file', placeholder: 'Upload new admin profile picture.' },
    { name: 'electionDate', label: 'Election End Date', type: 'date' },
  ];

  const handleAddElection = (formData: { [key: string]: string }) => {
    console.log('adding election Data:', formData);
    // Handle Add Election logic here
  };

  return <ReusableForm fields={fields} onSubmit={handleAddElection} submitButtonText="Create Election" className='election-form' memberList={true} />;
};

export default AddElectionForm;
