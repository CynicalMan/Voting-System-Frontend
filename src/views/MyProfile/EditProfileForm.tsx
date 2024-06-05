import React, { useEffect, useState } from 'react';
import ReusableForm, { FormField, FormValues } from '../../components/reusableform';
import { getAdmin, putAdmin } from '../../helper/helper';



const EditProfileForm: React.FC = () => {

  const [getformValues, setGetFormValues] = useState<{[key: string]: string}>({
    name: '',
    ssn: '',
    gender: '',
    email: '',
    city: '',
    dateOfBirth: '',
    imageProile: ''
  });

  // const [filteredFields, setFilteredFields] = useState<FormField[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

    

  const fields : FormField[] = [
    { name: 'name', label: 'User Name', type: 'text', placeholder: 'Enter new admin Name.',value: '' },
    { name: 'name', label: 'First Name', type: 'text', placeholder: 'Enter new admin First Name.',value: '' },
    { name: 'name', label: 'Last Name', type: 'text', placeholder: 'Enter new admin Last Name.',value: '' },
    { name: 'gender', label: 'Gender', type: 'select', placeholder: 'Please select your gender.',options:[
      { value: '0', label: 'Male' },
      { value: '1', label: 'Female' },
    ],value: '' },
    { name: 'dateOfBirth', label: 'Birthday', type: 'date' ,value: ''},
    { name: 'ssn', label: 'SSN', type: 'text', placeholder: 'Enter SSN' ,value: ''},
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter new admin email.',value: '' },
    { name: 'city', label: 'Address', type: 'text', placeholder: 'Enter Address' ,value: ''},
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter new admin password.',value: '' },
    { name: 'imageProile', label: 'Profile Picture', type: 'file',value: ''},
  ];

  //TODO get the id from local storage after auth
  const id = "e45787fb-f279-4b28-b102-3ea305471a27";
  const handleGetAdminById = async () => {
    console.log('edit admin profile Data:', id);
    try {
      const data = await getAdmin(id);
      console.log(data);
      
      setGetFormValues(data);
      // navigate("/ManageElections")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAdminById();
  }, [id]);

  console.log(getformValues);
  

  
  const handleEditProfile = async (formData: FormData) => {
    console.log('edit admin profile Data:', formData);
    try {
      console.log(formData);
      
      
      const data = await putAdmin(formData);
      console.log(data);
      // navigate('/ManageProfile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {getformValues && <ReusableForm fields={fields} initialData={getformValues} className='admin-form' onSubmit={handleEditProfile} submitButtonText="Edit Profile" isEditForm={true} />}
    </>
  );
};

export default EditProfileForm;

