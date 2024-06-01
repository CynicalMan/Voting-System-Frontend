import { createBrowserRouter } from "react-router-dom";

import ManageElections from "../views/Manage-Elections/ManageElections";
import ManageCandidates from "../views/Manage-Candidates/ManageCandidates";
import ManageUsers from "../views/Manage-Users/ManageUsers";


import App from "../App";
import AddAdminForm from "../views/Manage-Admin/AddAdminForm";
import EditProfileForm from "../views/MyProfile/EditProfileForm";
import ManageAdmin from "../views/Manage-Admin/ManageAdmin";
import ViewAdmins from "../views/Manage-Admin/ViewAdmins";
import ViewElections from "../views/Manage-Elections/ViewElections";
import AddElectionForm from "../views/Manage-Elections/AddElectionForm";
import ElectionDetails from "../views/Manage-Elections/ElectionDetails";
import ViewUserProfile from "../views/Manage-Users/ViewUserProfile";
import ViewUsers from "../views/Manage-Users/ViewUsers";
import ViewCandidates from "../views/Manage-Candidates/ViewCandidates";
import AddCandidateForm from "../views/Manage-Candidates/AddCandidateForm";
import ViewAdminProfile from "../views/Manage-Admin/ViewAdminProfile";
import Home from "../views/Home/home";
import MyProfile from "../views/MyProfile/myprofile";
import NotFound from "../views/NotFound/notFound";
import ViewCandidateProfile from "../views/Manage-Candidates/ViewCandidateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ManageElections",
        element: <ManageElections />,
        children: [
          {
            index: true,
            element: <ViewElections />,
          },
          {
            path: "AddElection",
            element: <AddElectionForm />,
          },
          {
            path: "ElectionDetails/:id",
            element: <ElectionDetails />,
          },
        ],
      },
      {
        path: "/ManageUsers",
        element: <ManageUsers />,
        children: [
          {
            index: true,
            element: <ViewUsers />,
          },
          {
            path: "ViewUserProfile/:id",
            element: <ViewUserProfile />,
          },
        ],
      },
      {
        path: "/ManageCandidates",
        element: <ManageCandidates />,
        children: [
          {
            index: true,
            element: <ViewCandidates />,
          },
          {
            path: "AddCandidate",
            element: <AddCandidateForm />,
          },
          {
            path: "ViewCandidateProfile/:id",
            element: <ViewCandidateProfile />,
          },
        ],
      },
      {
        path: "/ManageAdmin",
        element: <ManageAdmin />,
        children: [
          {
            index: true,
            element: <ViewAdmins />,
          },
          {
            path: "AddAdmin",
            element: <AddAdminForm />,
          },
          {
            path: "ViewAdminProfile/:id",
            element: <ViewAdminProfile />,
          },
        ],
      },
      {
        path: "/MyProfile",
        element: <MyProfile />,
        children: [
          {
            path: "EditProfile",
            element: <EditProfileForm />,
          },
        ],
      },
    ],
  },
  {
    // represents the wild card for any wrong
    // path
    path: "*",
    element: <NotFound />,
  },
]);
