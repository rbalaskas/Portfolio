// Skills.js

import React, { useState, useEffect } from 'react';
import '../css/Skills.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faHeadSideVirus, faScrewdriverWrench  } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet';

const Skills = () => {
  const [fadeInSkills, setFadeInSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsElement = document.getElementById('skills');
      if (skillsElement) {
        const { top } = skillsElement.getBoundingClientRect();
        const threshold = window.innerHeight * 0.4; // 40% of the viewport height
        if (top <= threshold) {
          setFadeInSkills(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Technical Skills
  const technicalSkills = [
    "JavaScript",
    "React.js",
    "HTML",
    "CSS",
    "Responsive Design",
    "API Integration",
    "UI/UX Principles"
  ];

  // Soft Skills
  const softSkills = [
    "Active Listening",
    "Clear Communication",
    "Interpersonal Skills",
    "Analytical Thinking",
    "Creative Problem-Solving",
    "Critical Thinking"
  ];

  // Backend Development Tools
  const tools = [
    "VB.Net",
    "C#",
    "Java",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "MSSQL",
    "MySQL"
  ];

  return (
    <div className={`skills ${fadeInSkills ? 'fade-in' : ''}`} id="skills">
       <Helmet>
        <title>Web and Software Development Skills | RB coding</title>
        <meta name="description" content="Experienced and professional developer in Cyprus offering services in web development, software development, e-commerce solutions, CRM software, UI and UX Design, web apps, custom software solutions, front-end and back-end development, responsive web design, and SEO!" />
        <meta name="keywords" content="
          web development, 
          website development, 
          CRM software, 
          custom software, 
          web applications, 
          e-commerce solutions, 
          UI/UX design, 
          front-end development, 
          back-end development, 
          responsive web design, 
          SEO services, 
          Cyprus web developer, 
          ιστοσελίδα Κύπρος, 
          ανάπτυξη λογισμικού, 
          σύστημα διαχείρισης πελατών, 
          υπηρεσίες ανάπτυξης ιστοσελίδων
        " />
        <meta name="author" content="RB Coding" />
      </Helmet>
      <h1 className='unique-header'>Expertise in</h1>
      <div className="row">
        <div className="column technical">
          <FontAwesomeIcon icon={faLaptopCode} size="2xl" style={{marginTop:'2rem'}} className='icon'/>
          <h1 className="category-header">Front-end Development</h1>
          <ul className="skill-list">
            {technicalSkills.map((skill, index) => (
              <li className="skill" key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="column soft">
          <FontAwesomeIcon icon={faHeadSideVirus} size="2xl" style={{marginTop:'2rem'}} className='icon'/>
          <h1 className="category-header">Soft Skills</h1>
          <ul className="skill-list">
            {softSkills.map((skill, index) => (
              <li className="skill" key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="column tools">
          <FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" style={{marginTop:'2rem'}} className='icon'/>
          <h1 className="category-header">Back-end Development</h1>
          <ul className="skill-list">
            {tools.map((tool, index) => (
              <li className="skill" key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
