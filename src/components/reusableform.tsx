import React, { useState, useEffect } from "react";
import "./styles/reusableform.css";
import PlusIcon from "../assets/plus.png";

export type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  value: string;
};

export type EditForm =
  | {
      email: string;
      password: string;
      userName: string;
      ssn: string;
      gender: number;
      firstName: string;
      lastName: string;
      address: string;
      dateOfBirth: string;
      imageCard: string;
    }
  | { [key: string]: any };

type Props = {
  fields: FormField[];
  onSubmit: (formData: FormData) => void;
  submitButtonText?: string;
  memberList?: boolean;
  isEditForm?: boolean;
  className: string;
  initialData?: { [key: string]: string };
};

const ReusableForm: React.FC<Props> = ({
  fields: initialFields,
  onSubmit,
  submitButtonText = "Submit",
  memberList = true,
  isEditForm = false,
  className,
  initialData = {} as { [key: string]: string }, // Default initialData to an empty object
}) => {
  const [fields, setFields] = useState<FormField[]>(initialFields);
  const [memberCount, setMemberCount] = useState<number>(2);
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    initialData
  );
  const [members, setMembers] = useState<string[]>([]);
  const [postformValues, setPostFormValues] = useState<EditForm>();
  const [formDataUrl, setFormDataUrl] = useState<string | null>(null);

  console.log(initialData);
  console.log(formData);
  console.log("q");
  

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    console.log(formData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    const membersArr: string[] = [];
    console.log(initialData);
    const editForm = {
      email: "",
      password: "",
      userName: "",
      ssn: "",
      gender: '',
      firstName: "",
      lastName: "",
      address: "",
      dateOfBirth: "",
      imageCard: "",
    };

    Object.entries(formData).forEach(([key, value]) => {
      console.log(key, value);
      console.log(editForm);
      
      if (isEditForm) {
        if (key === "imageProile") {
          console.log(value);
          editForm["imageCard"] = formData[key] || initialData[key];
        } else if (key === "name") {
          console.log(value);
          editForm["userName"] = formData[key] || initialData[key];
          editForm["firstName"] = formData[key] || initialData[key];
          editForm["lastName"] = formData[key] || initialData[key];
        } else if (key === "city") {
          console.log(value);
          editForm["address"] = formData[key] || initialData[key];
        } else if (key === "gender") {
          console.log(value);
          editForm["gender"] = formData[key] || initialData[key] === "Male" ? '0' : '1' ;
        } 
        // else {
        //   console.log(value);
        //   console.log(key);
        //   editForm[key] = formData[key] || initialData[key];
        // }
        editForm["password"] = formData["password"];
        console.log(initialData["email"]);
        
        editForm["email"] = formData["email"] || initialData["email"];
        console.log(editForm["email"]);
        
        editForm["dateOfBirth"] = formData["dateOfBirth"] || initialData["dateOfBirth"];
        editForm["ssn"] = formData["ssn"] || initialData["ssn"];

        console.log(editForm);

        console.log(key, value);
      }else{
        if (key.startsWith("member")) {
          console.log(key,value);
          membersArr.push(value);
        } else {
          console.log(key, value);
          formDataToSend.append(key, value);
        }
      } 
    });

    console.log(editForm);
    
    if (editForm) {
      Object.entries(editForm).forEach(([key, value]) => {
        console.log(key, value);
        formDataToSend.append(key, value);
      });
    }

    membersArr.forEach((member, index) => {
      formDataToSend.append(`CandidatesId[${index}]`, member);
    });

    console.log(editForm);
    console.log(formData);
    

    console.log(formDataToSend.get("CandidatesId"));
    console.log(formDataToSend.get("SSN"));

    onSubmit(formDataToSend);
  };

  const addNewMemberField = () => {
    const newField: FormField = {
      name: `member ${memberCount + 1}`,
      label: "",
      type: "text",
      placeholder: `Enter member ${memberCount + 1}`,
      value: "",
    };

    const updatedFields = [...fields];
    updatedFields.splice(memberCount + 1, 0, newField);
    setMemberCount(memberCount + 1);
    console.log(updatedFields);

    setFields(updatedFields);
  };

  console.log(formData);
  if (formData["imageProile"] && typeof formData["imageProile"] === "object") {
    const reader = new FileReader();

    const file: File = formData["imageProile"];

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && typeof e.target.result === "string") {
        const base64String = e.target.result;
        const dataUrl = `data:${file.type};base64,${
          base64String.split(",")[1]
        }`;
        console.log("Data URL:", dataUrl);
        setFormDataUrl(dataUrl);
      }
    };

    reader.readAsDataURL(file);
  }
  const imageUrl = `data:image/png;base64,${initialData["imageProile"]}`;

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
                value={formData[field.name] || initialData[field.name] || ''}
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
                defaultValue={initialData[field.name] || ""}
                placeholder={field.placeholder}
                onChange={handleInputChange}
              />
            )}
            {isEditForm && initialData && field.type === "file" && (
              <img src={formDataUrl || imageUrl} width={200} height={200} />
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
