import React, { useState, useEffect } from 'react';
import '../css/Services.css'; 
import { Helmet } from 'react-helmet';

const Services = () => {
  // Correct path to the profile image
  
  const profileImage1 = require('../assets/CustomWebsiteDevelopment.webp');
  const profileImage2 = require('../assets/LandingPage.webp');
  const profileImage3 = require('../assets/Ecommerce.webp');
  const profileImage4 = require('../assets/UIUX.webp');
  const profileImage5 = require('../assets/SoftwareDevelopment.webp');
  const profileImage6 = require('../assets/CustomApplicationDevelopment.webp');
 
  const services = [
    {
      title: "Custom Website Development",
      description: "I specialize in creating fully customized websites tailored to your business needs. From design to development, I work closely with you to ensure your website reflects your brand identity.",
      image: profileImage1
    },
    {
      title: "Landing Page Website",
      description: "A landing page is often the first impression customers have of your business. I design visually appealing and conversion-optimized landing pages to help you capture leads and drive sales.",
      image: profileImage2
    },
    {
      title: "E-commerce Solutions",
      description: "Take your online store to the next level with my e-commerce solutions. I build seamless shopping experiences that enhance user engagement and increase conversions, helping you grow your business.",
      image: profileImage3
    },
    {
      title: "UI/UX Design",
      description: "User interface (UI) and user experience (UX) design are crucial aspects of any digital product. I create intuitive and visually stunning interfaces that enhance user satisfaction.",
      image: profileImage4
    },
    {
      title: "Software Development",
      description: "I offer comprehensive software development services to turn your ideas into reality. Whether you need a web application or desktop software, I have the experience to deliver high-quality solutions.",
      image: profileImage5
    },
    {
      title: "Custom Application Development",
      description: "Custom application development are designed to address your unique business challenges and requirements. From enterprise solutions to specialized applications.",
      image: profileImage6
    }
  ];

  return (
    <div className="services" id="services">
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
      <h1 className='unique-header'>Empowering Your Business</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <h1>{service.title}</h1>
            <img src={service.image} alt={service.title} />
            <p className='description'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
