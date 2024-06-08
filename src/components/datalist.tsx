import React, { useState } from "react";
import "./styles/datalist.css";
import DataListItem from "../components/datalistItem";

type DataListProps = {
  data: { [key: string]: any }[];
  deleteText: string;
  className?: string;
};

const DataList: React.FC<DataListProps> = ({ data, deleteText, className }) => {
  const [items, setItems] = useState(data);

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className={`datalist ${className}`}>
      {items&&items.map((item, index) => (
        <DataListItem
          key={index}
          item={item}
          deleteText={deleteText}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default DataList;
