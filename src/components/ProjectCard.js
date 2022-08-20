import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <p>{project.developer}</p>
      <p>{project.description}</p>
      <p>{project.capture}% de capture</p>
      <p>{project.reduction}% de reduction</p>
      <p>Crédits totaux délivrés : {project.credits}</p>
    </div>
  );
};

export default ProjectCard;
