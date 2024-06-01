import React from "react";

type ProfileProps = {
  image?: string;
  data: { [key: string]: any }[];
};

const Profile: React.FC<ProfileProps> = ({image,data}) => {
  console.log(data);
  console.log(data);
  

  return (
    <div className=" w-50 m-auto ">
      <div className='profile'>
        <div className="profile-content">
            <img src="/profile.png" alt="" />
        </div>
      </div>
      {data&&data.map((row,index) => (  
     row.key === "image" || row.key ==="imageProile" ? null : (
      <div key={index} className="position-relative profile-item d-flex">
      <span className="my-2 w-40">{row.key}</span>
      <span className="text-left my-2">{row.value != null ? row.value : "N/A"}</span>
    </div>
  )
      ))}
    </div>
  );
};

export default Profile;
