import React, { useEffect } from "react";
import Lightbox from "./Lightbox";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.classList.add("shots");
    return () => {
      document.body.classList.remove("shots");
    };
  }, []);

  return (
    <div className="project-modal">
      <button className="close" onClick={onClose}>
        &times;
      </button>
      <div className="project-content">
        <div className="section">
          <h2>{project.name}</h2>
          <div className="date">{project.date}</div>
          <div className="roles">
            {project.role &&
              project.role.map((role, index) => (
                <span key={index}>{role}</span>
              ))}
          </div>
          {project.desc && <div className="desc">{project.desc}</div>}
          {project.shots && project.shots.length > 0 && (
            <div className="project-shots">
              <Lightbox images={project.shots} alt={project.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
