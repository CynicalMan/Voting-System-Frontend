import { useNavigate } from "react-router-dom";
import ReusableForm from "../../../components/reusableform";
import { postCandidate } from "../../../helper/helper";


const AddCandidateForm: React.FC = () => {

  const navigate = useNavigate()

  const fields = [
    { name: 'Name', label: 'Name', type: 'text', placeholder: 'Enter new candidate Name.' ,value: ''},
    { name: 'LastName', label: 'LastName', type: 'text', placeholder: 'Enter new candidate Name.',value: '' },
    { name: 'gender', label: 'Gender', type: 'select', placeholder: 'Please select your gender.',options:[
      { value: '0', label: 'Male' },
      { value: '1', label: 'Female' },
    ],value: '' },
    { name: 'DateOfBirth', label: 'Birthday', type: 'date',value: '' },
    { name: 'SSN', label: 'SSN', type: 'text', placeholder: 'Enter new candidate ID.' ,value: ''},
    { name: 'Email', label: 'Email', type: 'email', placeholder: 'Enter new candidate email.',value: '' },
    { name: 'City', label: 'City', type: 'text', placeholder: 'Enter city' ,value: ''},
    { name: 'Graduate', label: 'Graduate', type: 'text', placeholder: 'Enter graduate',value: '' },
    { name: 'Qulification', label: 'Qulification', type: 'text', placeholder: 'Enter qualification' ,value: ''},
    { name: 'jop', label: 'jop', type: 'text', placeholder: 'Enter jop',value: '' },
    { name: 'Image', label: 'image', type: 'file',value: ''},
    { name: 'Password', label: 'Password', type: 'password', placeholder: 'Enter new candidate password.' ,value: ''},
    { name: 'ConfirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Re-enter new candidate password.',value: '' },

  ];

  const handleCandidate = async (formData: { [key: string]: string }) => {
    console.log('adding candidate Data:', formData);
    // Handle Candidate logic here
    try {
      console.log(formData);
      const data = await postCandidate(formData);
      console.log(data);
      navigate('/Dashboard/ManageCandidates');
    } catch (error) {
      console.log(error);
    }
  };

  return <ReusableForm fields={fields} onSubmit={handleCandidate} submitButtonText="Add" memberList={false} className={'candidate-form'} />;
};

export default AddCandidateForm;
