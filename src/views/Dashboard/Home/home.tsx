import { useState, useEffect } from "react";
import DataTable from "../../../components/datatable";
import SearchBar from "../../../components/searchbar";
import { getAuthUser } from "../../../../localStorage";


type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Admin", accessor: "admin" },
  ];

  // admin will be displayname
  const user = getAuthUser()
  console.log(user);
  const displayName : string = user.displayName
  const data = [{ date: new Date(Date.now()).toLocaleString(), admin: displayName }];

  const [home, setHome] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the HomeDetails api

  useEffect(() => {
    const fetchHomeDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7285/api/Admin/Home/`);
        if (!response.ok) {
          throw new Error('Failed to fetch Admin details');
        }
        const data = await response.json();
        console.log(data);
        setHome(data)
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeDetails();
  }, []);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="my-3">
      <div className="test p-3">
        <div className="d-flex justify-content-around mb-3">
          <h1 className="">Welcome</h1>
          <div className="last-login ">
            <DataTable columns={columns} data={data} showActions={false} routes={{
              viewRoute: "",
              deleteRoute: "",
              editRoute: undefined
            }} hasEdit={false} id={""} deleteText={""} />
          </div>
        </div>
        <div className="stats w-50 mx-auto d-flex justify-content-around">
          <div className="admin-stat p-3 secondry-bg text-center">
            <span className="mb-2">Admins</span>
            <span>{home && home.numberOfAdmin}</span>
          </div>
          <div className=" election-stat p-3 secondry-bg text-center">
            <span className="mb-2">Elections</span>
            <span>{home && home.numberOfCategory}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
