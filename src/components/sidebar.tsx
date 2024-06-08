
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Profile from './profile';
import { getAuthUser } from '../../localStorage';

type Props = {};

const Sidebar: React.FC<Props> = () => {

  const [image, setImage] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the AdminDetails api
  const user = getAuthUser()
  console.log(user);
  const id : string = user.id
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7285/api/Admin/GetAdminById/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Admin details');
        }
        const data = await response.json();
        console.log(data.imageProile);
        
        setImage(data.imageProile)
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, [id]);

  const routes = [
    { path: "/Dashboard", label: "Home" },
    { path: "/Dashboard/ManageElections", label: "Manage Elections" },
    { path: "/Dashboard/ManageUsers", label: "Manage Users" },
    { path: "/Dashboard/ManageCandidates", label: "Manage Candidates" },
    { path: "/Dashboard/ManageAdmin", label: "Manage Admins" },
    { path: "/Dashboard/ManageProfile", label: "My Profile" },
    { path: "/logout", label: "Logout" }
  ];

  const [activeLink, setActiveLink] = useState<string>(useLocation().pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };


  return (
    <div className="sidebar">
      <Profile image={image} />
      <nav className="nav flex-column">
        {routes.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link text-center fs-5 mt-1 mb-2 text-black ${activeLink === link.path ? 'active' : ''}`}
            onClick={() => handleLinkClick(link.path)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
