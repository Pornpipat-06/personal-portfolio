import React from 'react';

const projects = [
  {
    title: "Project Alpha",
    description: "เว็บแอปพลิเคชันสำหรับจัดการงานที่สร้างด้วย React และ Firebase",
    tech: "React, Firebase, CSS",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Beta",
    description: "API สำหรับระบบ E-commerce ที่เขียนด้วย Node.js และ Express",
    tech: "Node.js, Express, MongoDB",
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <div className="page-container">
      <h1>โปรเจกต์ที่เคยทำ</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;