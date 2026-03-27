import React from "react";
import "./Styles/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import banner from "../assets/banner.png";


const Contact = () => {
  return (
    <section id="contact" className="contact" style={{ backgroundImage: `url(${banner})` }}>

      <div className="contact-container">


        <h2 className="contact-title">CONTACT ME</h2>


        {/*<p className="contact-text">
          Feel free to reach out! 
        </p>
        <p className="contact-text">
          I'm always open to new opportunites! :)
        </p>
        */}

        </div>

         {/*CONTACT ICONS*/}
        <div className="icons">


          <a href="mailto:cleaamorales@gmail.com">
            <FaEnvelope />
          </a>


          <a href="https://github.com/cleamorales" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>


          <a href="https://linkedin.com/in/clea-ama-morales" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        

    </section>
  );
};


export default Contact;
