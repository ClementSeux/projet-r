import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-cell">
        <p>Développeur</p>
        <p>
          <span className="bold-text">{project.developer}</span>
        </p>
      </div>

      <p className="multiline-paragraphe">{project.description}</p>

      <div className="card-cell">
        <p>
          <span className="bold-text">{project.capture}%</span> de capture
        </p>
        <p>
          <span className="bold-text">{project.reduction}%</span> de reduction
        </p>
      </div>
      <div className="card-cell">
        <p>
          Crédits totaux délivrés :{" "}
          <span className="bold-text">{project.credits}</span>
        </p>
        <button>Voir le détail des transactions</button>
      </div>
    </div>
  );
};

export default ProjectCard;
