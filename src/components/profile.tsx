import React from "react";
import notFoundImg from "/profile.png"

type ProfileProps = {
  image?: string;
  data?: { [key: string]: any }[];
};

const Profile: React.FC<ProfileProps> = ({image,data}) => {
  console.log(data);
  const imageUrl =  image ? `data:image/png;base64,${image}` : '';
  console.log(imageUrl);
  
  console.log(image);
  
  

  return (
    <div className=" w-50 m-auto ">
      <div className="profile">
      {!imageUrl ? 
        <div className="profile-content">
            <img src={notFoundImg}  alt="" />
        </div>
       : <img src={imageUrl} width={150} height={180} className="" alt="" />}
      </div>
      {data&&data.map((row,index) => (
        <div key={index} className="position-relative profile-item  d-flex ">
          <span className="my-2 w-40 ">{row.key}</span>
          <span className="text-left my-2">{row.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Profile;
