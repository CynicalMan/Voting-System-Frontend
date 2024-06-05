import React, { useEffect } from 'react';
import ReusableForm from '../../components/reusableform';
import { postElections } from '../../helper/helper';
import { useNavigate } from 'react-router-dom';

const AddElectionForm: React.FC = () => {

  const navigate = useNavigate()

  const fields = [
    { name: 'Name', label: 'Title', type: 'text', placeholder: 'Enter a title to your election.',value: '' },
    { name: 'member 1', label: 'Election Members', type: 'text', placeholder: 'Enter member 1' ,value: '' },
    { name: 'member 2', label: '', type: 'text', placeholder: 'Enter member 2.' ,value: ''},
    { name: 'CategoryLogo', label: 'Election Picture', type: 'file', placeholder: 'Upload new admin profile picture.' ,value: ''},
    { name: 'DateOfEndVoting', label: 'Election End Date', type: 'date' ,value: ''},
  ];

  const handleAddElection = async (formData: { [key: string]: string }) => {
    console.log('adding election Data:', formData);
    try {
      console.log(formData);
      const data = await postElections(formData);
      console.log(data);
      navigate("/ManageElections")
    } catch (error) {
      console.log(error);
    }
  };

 

  return <ReusableForm fields={fields} onSubmit={handleAddElection} submitButtonText="Create Election" className='election-form' memberList={true} />;
};

export default AddElectionForm;
