import axios from "axios";
export const getElections = async () => {
  try {
    const response = await fetch(
      "https://localhost:7285/api/Admin/ManageElection/ManageElection"
    );
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postElections = async (userData: any) => {
  console.log(userData);
  const orderData = userData;
  console.log(orderData);
  const response = await axios.post(
    "https://localhost:7285/api/Admin/AddNewElection",
    orderData
  );
  console.log(response);
  return response;
};

export const postCandidate = async (userData: any) => {
  console.log(userData);
  const orderData = userData;
  console.log(orderData);
  const response = await axios.post(
    "https://localhost:7285/api/Admin/AddCandidate",
    orderData
  );
  console.log(response);
  return response;
};

export const postAdmin = async (userData: any) => {
   console.log(userData);
   const orderData = userData;
   console.log(orderData);
   const response = await axios.post(
     "https://localhost:7285/api/Admin/CreateNewAdmin",
     orderData
   );
   console.log(response);
   return response;
};

export const getUsers = async () => {
  try {
    const response = await fetch(
      "https://localhost:7285/api/Admin/GetAllUsers"
    );
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getCandidates = async () => {
  try {
    const response = await fetch(
      "https://localhost:7285/api/Admin/GetAllCandidates"
    );
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCandidateAllPosts = async () => {
  try {
    const response = await fetch(
      `https://localhost:7285/api/Admin/GetAllPostsOfCandidates`
    );
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCandidate = async (id:string) => {
  try {
    console.log(id.split(" ")[0]);
    const nameId = id.split(" ")[0]
    
    const response = await fetch(
      `https://localhost:7285/api/Admin/GetAllCandidates?name=${nameId}`
    );
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAdmins = async () => {
  try {
    const response = await fetch(
      "https://localhost:7285/api/Admin/ManageAdmin"
    );
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAdmin = async (id : any) => {
  try {
    const response = await fetch(
      `https://localhost:7285/api/Admin/GetAdminById/${id}`
    );
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUser = async (token: string) => {
  try {
    const response = await  axios.get(
      "https://localhost:7285/api/Account/Profile",
      {
        headers: {
          Authorization: `bearer ${token}`,  
        }
      }
    );
    const results = await response.data;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getVotings = async (token: string) => {
  try {
    const response = await  axios.get(
      "https://localhost:7285/api/Voter/ManageElection/ManageElection",
      {
        headers: {
          Authorization: `bearer ${token}`,  
        }
      }
    );
    const results = await response.data;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};



export const putAdmin = async (userData: any, token: string) => {
  
  console.log(token);
  const orderData = userData;
  console.log(orderData);
  console.log(token);
  const response = await axios.put(
    "https://localhost:7285/api/Account/UpdateProfile",
    orderData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${token}`,  
      }
    }
  );
  console.log(response);
  return response;
};




interface KeyValue {
  key: string;
  value: any;
}

export const objectToArray = <T extends Record<string, any>>(
  obj: T
): KeyValue[] => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};


export function calculatePercentageFromVotes(candidates: any[]){
  console.log(candidates);
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.numberOfVotes, 0);
  const newCandidates = candidates.map(cand => {
    if (totalVotes === 0) {
      return { ...cand, percentage: 0 };
    }
    const percentage = (cand.numberOfVotes / totalVotes) * 100;
    return { ...cand, percentage: percentage };
  });
  return newCandidates 
}
