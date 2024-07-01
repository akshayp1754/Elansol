import { Navbar } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table/Table";

function Home() {
  const navigate = useNavigate();

  const key = localStorage.getItem("token");
  console.log("key: " + key);
  useEffect(() => {
    if (key === null) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Table/>
    </div>
  );
}

export default Home;
