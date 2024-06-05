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

export const getCandidate = async (id:any) => {
  try {
    const response = await fetch(
      `https://localhost:7285/api/Admin/GetCategoryById/${id}`
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


export const putAdmin = async (userData: any) => {
  console.log(userData);
  const orderData = userData;
  console.log(orderData);
  const response = await axios.put(
    "https://localhost:7285/api/Account/UpdateProfile",
    orderData
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

export function base64ToImage(base64String: string, fileName: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = `data:image/png;base64,${base64String}`;
    image.alt = fileName; // Set alt attribute if needed
  });
}

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
