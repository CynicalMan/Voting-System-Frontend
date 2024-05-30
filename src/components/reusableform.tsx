import React, { useState } from "react";

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
};

const ReusableForm: React.FC<Props> = ({
  fields,
  onSubmit,
  submitButtonText = "Submit",
}) => {
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

  return (
    <form onSubmit={handleSubmit} className="test p-2">
      <div className="d-flex w-100 flex-wrap">
        {fields.map((field) => (
          <div className="mb-3 px-2 w-50" key={field.name}>
            <label htmlFor={field.name} className="form-label">
              {field.label}
            </label>
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
          </div>
        ))}

        <div className="w-50 py-4 d-flex justify-content-center ">
          <button type="submit" className="btn btn-primary">
            {submitButtonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReusableForm;
