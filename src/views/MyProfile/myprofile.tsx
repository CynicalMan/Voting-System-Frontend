import React from "react";
import Profile from "../../components/profile";
import SearchBar from "../../components/searchbar";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/edit.png"

type MyProfileProps = {};

const MyProfile: React.FC<MyProfileProps> = () => {


  const data = [
    { key: "ID", value: "20202" },
    { key: "Name", value: "Mostafa Mohamed" },
    { key: "Birthday", value: "20 March 2000" },
    { key: "Gender", value: "Male" },
    { key: "City", value: "Giza" },
    { key: "Email", value: "Mostafamohamed1@gmail.com" },
  ];

  return (
    <div>
      <div className="my-3 mt-4">
        <SearchBar
          onSearch={function (query: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className="test py-2 pb-3">
        <Profile data={data} />
        <div className="text-center">
          <Link to={`AddElection`} className="btn secondary-bg mt-3 py-1">
            <span>Edit</span> <img className="mb-1" src={EditIcon} width={16} height={16} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
