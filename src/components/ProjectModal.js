import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="projectModal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{project.name}</h2>
        <div className="roles">
          {project.role &&
            project.role.map((role, index) => <span key={index}>{role}</span>)}
        </div>
        {project.desc && <div className="desc">{project.desc}</div>}
      </div>
    </div>
  );
};

export default ProjectModal;
