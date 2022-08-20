import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="developer">
        <p>Développeur</p>
        <p>
          <span className="bold-text">{project.developer}</span>
        </p>
      </div>
      <p className="multiline-paragraphe">{project.description}</p>
      <p>
        <span className="bold-text">{project.capture}%</span> de capture
      </p>
      <p>
        <span className="bold-text">{project.reduction}%</span> de reduction
      </p>
      <p>
        Crédits totaux délivrés :{" "}
        <span className="bold-text">{project.credits}</span>
      </p>
    </div>
  );
};

export default ProjectCard;
