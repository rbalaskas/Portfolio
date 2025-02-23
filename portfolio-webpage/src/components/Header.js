import React from 'react'
import {navbar} from '../css/Header.css'
import { Helmet } from 'react-helmet';


const Header = () => {
    return (


      
        <nav className="navbar">
         <Helmet>
        <title>Web Development Services</title>
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
        <div className="left">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
        <div className="middle">
            <a href="/">RB Coding</a>
        </div>
        <div className="right">
          <ul>
            <li><a href="#contact" className='button-50'>Contact</a></li>
          </ul>
        </div>
      </nav>
      );
}

export default Header