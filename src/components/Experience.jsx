import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Hackathon Finalist',
      company: 'ACM W',
      duration: 'Sep 2024',
    },
    {
        role:'Infynite 2024 Hackathon ',
        company:'PES University',
        duration:'Sept 2024',
    }
  ];

  return (
    <div className="section">
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <strong>{exp.role}</strong> – {exp.company} ({exp.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
