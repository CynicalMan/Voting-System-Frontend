import axios from "axios";
export const getElections = async () => {
   try {
    const response = await fetch("https://localhost:7285/api/Admin/ManageElection/ManageElection");
    const results = await response.json();
    console.log(results);
    return results;
   } catch (error) {
        console.log(error);
     return error   
   }
  };

export const postElections = async ( userData : any) => {
    console.log(userData);
    const orderData = userData
    console.log(orderData);
    const response = await axios.post("https://localhost:7285/api/Admin/AddNewElection",orderData);
    console.log(response);
    return response
};

export const getUsers = async () => {
    try {
     const response = await fetch("https://localhost:7285/api/Admin/GetAllUsers");
     const results = await response.json();
     console.log(results);
     return results;
    } catch (error) {
         console.log(error);
      return error   
    }
   };
export const getCandidates = async () => {
    try {
     const response = await fetch("https://localhost:7285/api/Admin/GetAllCandidates");
     const results = await response.json();
     console.log(results);
     return results;
    } catch (error) {
         console.log(error);
      return error   
    }
   };

   export const getAdmins = async () => {
    try {
     const response = await fetch("https://localhost:7285/api/Admin/ManageAdmin");
     const results = await response.json();
     console.log(results);
     return results;
    } catch (error) {
         console.log(error);
      return error   
    }
   };