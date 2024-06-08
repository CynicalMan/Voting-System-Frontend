import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeAuthUser } from "../../../../localStorage";

const Logout: React.FC = () => {
  const navigate = useNavigate();

    useEffect(() => {
        removeAuthUser()
        navigate("/login");
    }, [navigate]);

  return <div>Logging out...</div>; // You can customize this message or UI as needed
};

export default Logout;
