import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/home";
import ManageElections from "../views/Manage-Elections/manage-elections";
import ManageCandidates from "../views/Manage-Candidates/manage-candidates";
import ManageUsers from "../views/Manage-Users/manage-users"
import ManageAdmin from "../views/Manage-Admin/manage-admin"
import MyProfile from "../views/MyProfile/myprofile"
import NotFound from "../views/NotFound/notFound"


import App from "../App";

export const router = createBrowserRouter([
{
    path: '/',
    element:<App/>,
    children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/ManageElections",
            element:<ManageElections/>
        },
        {
            path:"/ManageUsers",
            element:<ManageUsers/>
        },
        {
            path:"/ManageCandidates",
            element:<ManageCandidates/>
        },
        {
            path:"/ManageAdmin",
            element:<ManageAdmin/>
        },
        {
            path:"/MyProfile",
            element:<MyProfile/>
        },
        
    ]
},
  {
    // represents the wild card for any wrong 
    // path 
    path: "*",
    element: <NotFound />
  },
])