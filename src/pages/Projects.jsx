import React from 'react';
import projectAlphaImg from '../assets/project-a.png'; 
import projectBetaImg from '../assets/project-b.png';

const projects = [
 {
  title: "Premier League Champion",
  description: "สามารถพาทีมคว้าแชมป์พรีเมียร์ลีกในฤดูกาลแรกที่คุมทีมได้",
  tech: "2020 - 2021",
    imageUrl: projectAlphaImg, 
 },
 {
  title: "UEFA League Champion",
  description: "สามารถพาทีมคว้าแชมป์ยูฟ่าลีกในฤดูกาลสุดท้ายที่คุมทีม",
  tech: "2021 - 2022",
    imageUrl: projectBetaImg, 
 },
];

function Projects() {
 return (
  <div className="page-container">
   <h1>โปรเจกต์ที่เคยทำ</h1>
   <div className="projects-grid">
    {projects.map((project, index) => (
     <div className="card project-card" key={index}>
            <img 
              src={project.imageUrl} 
              alt={`ภาพหน้าจอของโปรเจกต์ ${project.title}`}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>ฤดูกาลที่:</strong> {project.tech}</p>
            </div>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Projects;