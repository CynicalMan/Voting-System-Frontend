import React from 'react';
import ReusableForm from '../../components/reusableform';
import { postCandidate } from '../../helper/helper';

const AddCandidateForm: React.FC = () => {
  const fields = [
    { name: 'Name', label: 'Name', type: 'text', placeholder: 'Enter new candidate Name.' },
    { name: 'LastName', label: 'LastName', type: 'text', placeholder: 'Enter new candidate Name.' },
    { name: 'gender', label: 'Gender', type: 'select', placeholder: 'Please select your gender.',options:[
      { value: '0', label: 'Male' },
      { value: '1', label: 'Female' },
    ] },
    { name: 'DateOfBirth', label: 'Birthday', type: 'date' },
    { name: 'SSN', label: 'SSN', type: 'text', placeholder: 'Enter new candidate ID.' },
    { name: 'Email', label: 'Email', type: 'email', placeholder: 'Enter new candidate email.' },
    { name: 'City', label: 'City', type: 'text', placeholder: 'Enter city' },
    { name: 'Graduate', label: 'Graduate', type: 'text', placeholder: 'Enter graduate' },
    { name: 'Qulification', label: 'Qulification', type: 'text', placeholder: 'Enter qualification' },
    { name: 'jop', label: 'jop', type: 'text', placeholder: 'Enter jop' },
    { name: 'Image', label: 'image', type: 'file'},
    { name: 'Password', label: 'Password', type: 'password', placeholder: 'Enter new candidate password.' },
    { name: 'ConfirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Re-enter new candidate password.' },

  ];

  const handleCandidate = async (formData: { [key: string]: string }) => {
    console.log('adding candidate Data:', formData);
    // Handle Candidate logic here
    try {
      console.log(formData);
      const data = await postCandidate(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  return <ReusableForm fields={fields} onSubmit={handleCandidate} submitButtonText="Add" memberList={false} className={'candidate-form'} />;
};

export default AddCandidateForm;
