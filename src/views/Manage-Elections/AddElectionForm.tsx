import React, { useEffect } from 'react';
import ReusableForm from '../../components/reusableform';
import { postElections } from '../../helper/helper';

const AddElectionForm: React.FC = () => {
  const fields = [
    { name: 'Name', label: 'Title', type: 'text', placeholder: 'Enter a title to your election.' },
    { name: 'member 1', label: 'Election Members', type: 'text', placeholder: 'Enter member 1' },
    { name: 'member 2', label: '', type: 'text', placeholder: 'Enter member 2.' },
    { name: 'CategoryLogo', label: 'Election Picture', type: 'file', placeholder: 'Upload new admin profile picture.' },
    { name: 'DateOfEndVoting', label: 'Election End Date', type: 'date' },
  ];

  const handleAddElection = async (formData: { [key: string]: string }) => {
    console.log('adding election Data:', formData);
    try {
      console.log(formData);
      const data = await postElections(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

 

  return <ReusableForm fields={fields} onSubmit={handleAddElection} submitButtonText="Create Election" className='election-form' memberList={true} />;
};

export default AddElectionForm;
