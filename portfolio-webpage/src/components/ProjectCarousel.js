import React, { useState } from 'react';
import Carousel from 'react-slick'; // Assuming you're using react-slick for the carousel

const ProjectCarousel = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Ecommerce Project 1',
      description: 'Description of Ecommerce Project 1',
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    },
    {
      id: 2,
      title: 'Ecommerce Project 2',
      description: 'Description of Ecommerce Project 2',
      images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
    },
    {
      id: 3,
      title: 'Ecommerce Project 3',
      description: 'Description of Ecommerce Project 3',
      images: ['image7.jpg', 'image8.jpg', 'image9.jpg'],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project" onClick={() => handleProjectClick(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-details">
          <button onClick={handleClose}>X</button>
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <Carousel>
            {selectedProject.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
