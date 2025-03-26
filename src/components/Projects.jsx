import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Smart Carrier for New Mothers',
      description: 'Developed a smart carrier for new mothers, ensuring comfort and travel-friendliness.',
    },
    {
      name: 'Mood Chart App',
      description: 'Created a React app to track and analyze weekly and monthly moods.',
    },
    
  ];

  return (
    <div className="section">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong> – {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
