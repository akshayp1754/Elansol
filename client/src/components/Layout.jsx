import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import privateRoute from "./hoc/privateRoute";
import Table from "./Table/Table";

function Layout() {
  return (
    <>
      <Navbar/>
      <Table/>
      <Outlet />
    </>
  );
}

export default privateRoute(Layout);
