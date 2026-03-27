import React from "react";
import "./Styles/About.css";
import about from "../assets/about.PNG";


const About = () => {
  return (
    <section id="about" className="about">


      <div className="about-container">


        <h2 className="about-title">ABOUT ME</h2>


        <p className="about-text">
          Hi, I am Computer Science student passionate about software engineering, web development, and building full-stack applications. 
          I enjoy working on projects that require both analytical thinking and creativity, 
          from designing algorithms and data structures to developing interactive and responsive web experiences.
          Currently, I’m exploring machine learning and advanced web technologies to broaden my skill set and deepen my understanding of the field. 
          Feel free to explore my work and connect with me.
        </p>

        <p className="about-text">
          Here are some of my technical skills:
        </p>

      <div class="skills">
        <ul class="skills-left">
          <li>C++</li>
          <li>Java</li>
          <li>Python</li>
        </ul>

        <ul class="skills-center">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>

        <ul class="skills-right">
          <li>Git</li>
          <li>MSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>

        <p className="about-text">
            Beyond work and school, I’m into learning new languages (human and code), reading psychology, and traveling whenever I can to see new places and perspectives.
        </p>

        </div>
   
      <div className="about-img">
        <img src={about}/>
      </div>


    </section>
  );
};


export default About;
