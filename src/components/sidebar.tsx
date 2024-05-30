
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

const Sidebar: React.FC<Props> = () => {

  const routes = [
    { path: "/", label: "Home" },
    { path: "/ManageElections", label: "Manage Elections" },
    { path: "/ManageUsers", label: "Manage Users" },
    { path: "/ManageCandidates", label: "Manage Candidates" },
    { path: "/ManageAdmin", label: "Manage Admins" },
    { path: "/MyProfile", label: "My Profile" },
    { path: "/logout", label: "Logout" }
  ];

  const [activeLink, setActiveLink] = useState<string>(useLocation().pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };


  return (
    <div className="sidebar">
      <div className='profile'>
        <div className="profile-content">
            <img src="/profile.png" alt="" />
        </div>
      </div>
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
