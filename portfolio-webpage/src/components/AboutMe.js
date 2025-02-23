import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="About" id="aboutme">
      <Helmet>
        <title>Web and Software Development Services | RB coding</title>
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
      <div className="content">
        <div className="text">
          <h1>Hey,  I’m Rafael.<br/> It's a pleasure to meet you!</h1>
          <h4>
            As a junior Software Developer, I've embarked on an exciting journey in the world of technology. I've had the privilege of working on various projects, each presenting unique challenges and learning opportunities.<br/><br/>
            Since starting my career, I've been passionate about continuously learning and improving my skills. I've collaborated with experienced developers and mentors who have guided me along the way, helping me gain valuable insights and knowledge.<br/>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
