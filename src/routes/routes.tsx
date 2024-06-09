// src/router/index.tsx

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard";
import AdminAuth from "../middleware/AdminAuth";
import Home from "../views/Dashboard/Home/home";
import AddElectionForm from "../views/Dashboard/Manage-Elections/AddElectionForm";
import ElectionDetails from "../views/Dashboard/Manage-Elections/ElectionDetails";
import ManageElections from "../views/Dashboard/Manage-Elections/ManageElections";
import ViewElections from "../views/Dashboard/Manage-Elections/ViewElections";
import ManageUsers from "../views/Dashboard/Manage-Users/ManageUsers";
import Login from "../views/Main/login/Login";
import Register from "../views/Main/register/Register";
import ViewUsers from "../views/Dashboard/Manage-Users/ViewUsers";
import ViewUserProfile from "../views/Dashboard/Manage-Users/ViewUserProfile";
import ViewCandidates from "../views/Dashboard/Manage-Candidates/ViewCandidates";
import ManageCandidates from "../views/Dashboard/Manage-Candidates/ManageCandidates";
import EditCandidateForm from "../views/Dashboard/Manage-Candidates/EditCandidateForm";
import ViewCandidateProfile from "../views/Dashboard/Manage-Candidates/ViewCandidateProfile";
import AddCandidateForm from "../views/Dashboard/Manage-Candidates/AddCandidateForm";
import ManageAdmin from "../views/Dashboard/Manage-Admin/ManageAdmin";
import ViewAdmins from "../views/Dashboard/Manage-Admin/ViewAdmins";
import AddAdminForm from "../views/Dashboard/Manage-Admin/AddAdminForm";
import ViewAdminProfile from "../views/Dashboard/Manage-Admin/ViewAdminProfile";
import App from "../App";
import UserAuth from "../middleware/UserAuth";
import Logout from "../views/Dashboard/Logout/Logout";
import EditDashProfileForm from "../views/Dashboard/MyProfile/EditDashProfileForm";
import ManageDashProfile from "../views/Dashboard/MyProfile/ManageDashProfile";
import MyDashProfile from "../views/Dashboard/MyProfile/MyDashProfile";
import CandidateProfile from "../views/Main/ManageVote/candidate-profile/CandidateProfile";
import ManageVote from "../views/Main/ManageVote/ManageVote";
import VotePage from "../views/Main/ManageVote/vote/VotePage";
import ManageProfile from "../views/Main/profile/ManageProfile";
import MyProfile from "../views/Main/profile/MyProfile";
import VotingPage from "../views/Main/voting/Voting";
import VotingResults from "../views/Main/ManageVote/votingResult/VotingResults";
import NotFound from "../views/NotFound/NotFound";
import Update from "../views/Main/update/Update";
import EditProfileForm from "../views/Main/profile/EditProfileForm";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <AdminAuth />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "ManageElections",
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
            path: "ManageUsers",
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
            path: "ManageCandidates",
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
              {
                path: "EditCandidate/:id",
                element: <EditCandidateForm />,
              },
            ],
          },
          {
            path: "ManageAdmin",
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
            path: "ManageProfile",
            element: <ManageDashProfile />,
            children: [
              {
                index: true,
                element: <MyDashProfile />,
              },
              {
                path: "EditProfile",
                element: <EditDashProfileForm />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <UserAuth />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            index: true,
            element: <VotingPage />,
          },
          {
            path: "vote/:id",
            element: <ManageVote />,
            children: [
              {
                index: true,
                element: <VotePage />,
              },
              {
                path: "VotingResult/:id",
                element: <VotingResults />,
              },
            ],
          },
          {
            path: "CandidateProfile/:id",
            element: <CandidateProfile />,
          },
          {
            path: "ManageProfile",
            element: <ManageProfile />,
            children: [
              {
                index: true,
                element: <MyProfile />,
              },
              {
                path: "EditProfile",
                element: <EditProfileForm />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
