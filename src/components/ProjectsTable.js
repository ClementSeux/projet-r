import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsTable = () => {
  // test data
  const data = [
    {
      developer: "Athena",
      description:
        "Athena Recherche & Innovation produces biohydrogen from waste and wastewater from the food industry.",
      reduction: 62,
      capture: 56.8,
      credits: 500,
    },
    {
      developer: "Athena",
      description:
        "Athena Recherche & Innovation produces biohydrogen from waste and wastewater from the food industry.",
      reduction: 62,
      capture: 56.8,
      credits: 500,
    },
    {
      developer: "Athena",
      description:
        "Athena Recherche & Innovation produces biohydrogen from waste and wastewater from the food industry.",
      reduction: 62,
      capture: 56.8,
      credits: 500,
    },
    {
      developer: "Athena",
      description:
        "Athena Recherche & Innovation produces biohydrogen from waste and wastewater from the food industry.",
      reduction: 62,
      capture: 56.8,
      credits: 500,
    },
    {
      developer: "Athena",
      description:
        "Athena Recherche & Innovation produces biohydrogen from waste and wastewater from the food industry.",
      reduction: 62,
      capture: 56.8,
      credits: 500,
    },
    {
      developer: "Athena",
      description:
        "Athena Recherche & Innovation produces biohydrogen from waste and wastewater from the food industry.",
      reduction: 62,
      capture: 56.8,
      credits: 500,
    },
    {
      developer: "Athena",
      description:
        "Athena Recherche & Innovation produces biohydrogen from waste and wastewater from the food industry.",
      reduction: 62,
      capture: 56.8,
      credits: 500,
    },
    {
      developer: "Athena",
      description:
        "Athena Recherche & Innovation produces biohydrogen from waste and wastewater from the food industry.",
      reduction: 62,
      capture: 56.8,
      credits: 500,
    },
  ];
  return (
    <div className="table-container">
      {data.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsTable;
