import React, { useState } from "react";
import "./styles/reusableform.css";
import PlusIcon from "../assets/plus.png";
import { objectToArray } from "../helper/helper";

type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
};

type Props = {
  fields: FormField[];
  onSubmit: (formData: FormData) => void;
  submitButtonText?: string;
  memberList: boolean;
  className: string;
};

const ReusableForm: React.FC<Props> = ({
  fields: initialFields,
  onSubmit,
  submitButtonText = "Submit",
  memberList = true,
  className,
}) => {
  const [fields, setFields] = useState<FormField[]>(initialFields);
  const [memberCount, setMemberCount] = useState<number>(2);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [members, setMembers] = useState<{ [key: string]: any }>({});


  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = event.target;
    console.log(value);
    if (name.startsWith("member")) {
      console.log(value);
      setMembers({...members,[name]: value})
    }
      console.log(value);
      
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
      console.log(formData);
      
    
    console.log(members);
    
    const CandidatesId = {
      CandidatesId: Object.values(members)
    };

    console.log(CandidatesId);
    

    setFormData({...formData,CandidatesId}) 
    console.log(formData);
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    console.log(formDataToSend);
    
    onSubmit(formDataToSend);
  };

  console.log(formData);
  

  const addNewMemberField = () => {
    const newField: FormField = {
      name: `member ${memberCount + 1}`,
      label: "",
      type: "text",
      placeholder: `Enter member ${memberCount + 1}`,
    };

    const updatedFields = [...fields];
    updatedFields.splice(memberCount + 1, 0, newField);
    setMemberCount(memberCount + 1);
    console.log(updatedFields);
    
    setFields(updatedFields);
  };

  console.log(members);
  

  return (
    <form onSubmit={handleSubmit} className={`test p-4 ${className}`}>
      <div className="form-inner">
        {fields.map((field) => (
          <div
            className={`field-container ${
              field.label === "Password" ? `password-container` : ``
            }`}
            key={field.name}
          >
            {field.label && (
              <label htmlFor={field.name} className="form-label">
                {field.label}
              </label>
            )}
            {field.type === "select" ? (
              <select
                className="form-control"
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                className="form-control"
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleInputChange}
              />
            )}
            {memberList && field.name === `member ${memberCount}` && (
              <button
                type="button"
                className="btn grey-bg mt-3 py-1"
                onClick={addNewMemberField}
              >
                <img
                  className="me-2"
                  src={PlusIcon}
                  width={14}
                  height={14}
                  alt=""
                />
                Add more members
              </button>
            )}
          </div>
        ))}
        <div className="submit-container">
          <button type="submit" className="btn secondary-bg mt-3 py-1 px-4">
            {submitButtonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReusableForm;
