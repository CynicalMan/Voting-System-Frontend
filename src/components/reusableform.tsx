import React, { useState } from "react";
import "./styles/reusableform.css";
import PlusIcon from "../assets/plus.png"

type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
};

type Props = {
  fields: FormField[];
  onSubmit: (formData: { [key: string]: string }) => void;
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
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const addNewMemberField = () => {
    const newField: FormField = {
      name: `member ${fields.length - 2}`,
      label: "",
      type: "text",
      placeholder: `Enter member ${fields.length - 2}`,
    };
    console.log(fields.length);

    const updatedFields = [...fields];
    updatedFields.splice(memberCount + 1, 0, newField);
    setMemberCount(memberCount + 1);
    console.log(updatedFields);

    setFields(updatedFields);
  };

  return (
    <form onSubmit={handleSubmit} className={`test p-4 ${className}`}>
      <div className="form-inner">
        {fields.map((field) => (
          <div className={`field-container ${field.label === "Password" ? `password-container` : ``}`} key={field.name}>
            {field.label !== "" && (
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
                value={formData[field.name] || ""}
                onChange={handleInputChange}
              />
            )}
            {memberList && field.name === `member ${memberCount}` && (
              <button
                type="button"
                className="btn grey-bg mt-3 py-1"
                onClick={addNewMemberField}
              >
                <img className="me-2" src={PlusIcon} width={14} height={14} alt="" />Add more members
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
