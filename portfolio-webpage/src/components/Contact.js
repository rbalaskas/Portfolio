import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css'; // Import the CSS file for styling
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [error, setError] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [contactNoValid, setContactNoValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [fadeInSkills, setFadeInSkills] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const skillsElement = document.getElementById('contact');
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



  const formRef = useRef();

  const SendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const contactNo = form.contactNo.value.trim();
    const message = form.message.value.trim();
    
    let valid = true;
    
    if (!name) {
      setNameValid(false);
      valid = false;
    } else {
      setNameValid(true);
    }

    if (!email) {
      setEmailValid(false);
      valid = false;
    } else {
      setEmailValid(true);
    }

    if (!contactNo) {
      setContactNoValid(false);
      valid = false;
    } else {
      setContactNoValid(true);
    }

    if (!message) {
      setMessageValid(false);
      valid = false;
    } else {
      setMessageValid(true);
    }

    if (!valid) {
      setError('* All fields are required.');
      return;
    }

    setError('');
    
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form,
      process.env.REACT_APP_EMAILJS_USER_ID,
    ).then((result) => {
      setError('Inquiry sent successfully.');
      form.name.value = "";
      form.email.value = "";
     form.contactNo.value = "";
    form.message.value = "";
    }, (error) => {
      console.log(error.text);
    });
  };
  

  return (
      <div className={`background ${fadeInSkills ? 'slide-in' : ''}`}id="contact">
      <Helmet>
        <title>Web and Software Development Services | RB Coding</title>
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
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>Send Inquiry</span>
              </div>
            </div>
            <div className="screen-body-item">
              <form ref={formRef} className="app-form" onSubmit={SendEmail}>
              {error && <p className="error-message" style={{ color: 'white' }}>{error}</p>}
                <div className="app-form-group">
                  <input 
                    className={`app-form-control ${!nameValid && 'input-error'}`} 
                    placeholder="NAME" 
                    name="name" 
                  />
                </div>
                <div className="app-form-group">
                  <input 
                    className={`app-form-control ${!emailValid && 'input-error'}`} 
                    placeholder="EMAIL" 
                    name="email" 
                  />
                </div>
                <div className="app-form-group">
                  <input 
                    className={`app-form-control ${!contactNoValid && 'input-error'}`} 
                    placeholder="CONTACT NO" 
                    name="contactNo" 
                  />
                </div>
                <div className="app-form-group message">
                  <input 
                    className={`app-form-control ${!messageValid && 'input-error'}`} 
                    placeholder="MESSAGE" 
                    name="message" 
                  />
                </div>
                <div className="app-form-group buttons">
                  <button type="button" className="app-form-button" onClick={() => formRef.current.reset()}>CANCEL</button>
                  <button type="submit" className="app-form-button">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
