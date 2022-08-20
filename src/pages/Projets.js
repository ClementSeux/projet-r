import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Filters from "../components/Filters";
import ProjectsTable from "../components/ProjectsTable";

const Projets = () => {
  return (
    <div className="container">
      {<Navbar />}
      {<Header />}
      <div className="table-head">
        {<Navigation />}
        {<Filters />}
      </div>
      {<ProjectsTable />}
    </div>
  );
};

export default Projets;
