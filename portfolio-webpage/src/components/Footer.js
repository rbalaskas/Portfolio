import React from 'react';
import '../css/Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

const Footer = () => {
  return (
    <div className='footer'>
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
      <h1 className='Footer_moto'>
        Born in Larnaca<br/>embracing the future of technology,<br/>seeking out the next horizon.
      </h1>
      <nav className="footer-nav">
        <ul className="footer-links">
          <li><a href='#aboutme'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <div className="social-media">
        <a href="https://www.instagram.com/rb_coding" alt="rbcoding Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://github.com/rbalaskas"  alt="rbcoding github"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/rafael-balaskas/"  alt="rbcoding Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
      <p className='copyright'>Handcrafted by Me &copy; 2024 Rafael Balaskas </p>
    </div>
  );
}

export default Footer;
