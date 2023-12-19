import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const navigate = useNavigate();
  const location = useLocation();
  const projectListRef = useRef(null);

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + "/DB/data.json");

        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태: ${response.status}`);
        }

        const data = await response.json();
        setProjectData(data.reverse()); // 역순 정렬
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [show, setShow] = useState(false);

  const openModal = (project) => {
    setShow(true);
    navigate(`/Projects/${project.id}`);
    setSelectedProjectId(project.id);
  };

  const closeModal = () => {
    setShow(false);
    setSelectedProjectId(null);
  };

  // 모달이 닫힐 때 뒤로 가기
  const handleModalHide = () => {
    closeModal();
    navigate(-1);
  };

  useEffect(() => {
    // URL에서 프로젝트 ID 가져오기
    const projectIdFromUrl = parseInt(location.pathname.split("/").pop(), 10);

    // 프로젝트 ID가 유효하고, 해당 ID의 프로젝트가 존재하면 선택된 프로젝트 ID로 설정
    if (
      projectIdFromUrl &&
      projectData.some((project) => project.id === projectIdFromUrl)
    ) {
      setSelectedProjectId(projectIdFromUrl);
    }
  }, [location.pathname, projectData]);

  useEffect(() => {
    // URL이 '/Projects/'로 시작하면서 선택된 프로젝트 ID가 있는 경우 모달 열기
    if (location.pathname.startsWith("/Projects/") && selectedProjectId) {
      setShow(true);
    }
  }, [location.pathname, selectedProjectId]);

  useEffect(() => {
    // URL이 '/projects/'로 시작하지 않으면 모달 닫기
    if (!location.pathname.startsWith("/Projects/")) {
      closeModal();
    }
  }, [location.pathname]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const visibleProjects = projectData.filter(
    (project) => project.visible !== false
  );
  const currentProjects = visibleProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (projectListRef.current) {
      projectListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <div className="content project">
        <div className="section" ref={projectListRef}>
          <h2 className="sub-title">Projects</h2>
          {loading ? (
            <p>로딩 중...</p>
          ) : error ? (
            <p>에러: {error}</p>
          ) : (
            <div className="project-list d-grid grid-3 gap1">
              {currentProjects.map((project) => (
                <div
                  className="col"
                  key={project.id}
                  style={{ backgroundImage: `url(${project.imgsrc})` }}
                >
                  <button
                    className="subject"
                    onClick={() => openModal(project)}
                  >
                    {project.name}
                  </button>
                  {project.role && (
                    <div className="roles">
                      {project.role.map((role, index) => (
                        <span key={index}>{role}</span>
                      ))}
                    </div>
                  )}
                  {project.desc && <div className="desc">{project.desc}</div>}
                </div>
              ))}
            </div>
          )}

          {selectedProjectId && (
            <Modal show={show} onHide={handleModalHide}>
              <ProjectModal
                project={projectData.find(
                  (project) => project.id === selectedProjectId
                )}
                onClose={closeModal}
              />
            </Modal>
          )}

          <div className="pagination">
            {Array.from({
              length: Math.ceil(visibleProjects.length / projectsPerPage),
            }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "current-page" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
