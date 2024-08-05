import React from 'react';
import resume from './assets/pdf/resume.pdf';
import portrait from './assets/media/me.jpeg';
import './About.css';

const About = () => {
  return (
    <div id="wrapper">
      <nav>
        <div id="home"> 
          <a href="/">Home</a>
        </div>
        <div id="links">
          <a href="/about" id="active">About</a>
          <a href="/projects">Project</a>
        </div>
      </nav>
      <h1 className="heading"> Who Am I?</h1>
      <div className="intro">
        <p> 
          Hello! I'm Lea Boyadjian, a dedicated <mark> software engineer </mark> with a talent for 
          transforming complex challenges into streamlined, effective solutions. 
          Currently, I am an Associate Software Engineer at Prudential Finance, where I 
          focus on developing scalable solutions to enhance financial systems. 
          My journey in tech began with Girls Who Code Summer Immersion program back in 2017
          where I learned to code in Python and Javascript for the first time. 
          I enjoyed it so much I decided then to make it my career 👩🏻‍💻
        </p>  
        <div id="external">
          <a href={resume} id="resume">view resume</a>
          <a href="mailto:lea.a.boyadjian@gmail.com" id="email"> say hello</a>
        </div>
        <div id="aboutWrapper">
          <div id="bio">
            <p>
              I hold a <mark> Bachelors Degree in Web and Mobile Computing </mark> from 
              Rochester Institute of Technology, and I've been fortunate to work on a 
              range of projects from building web applications to creating fun games such as whack-a-mole.
              My technical skills include proficiency in <mark>Python, Java, and JavaScript</mark> with experience 
              in frameworks like React and Node.js.  
            </p>
            <p> 
              When I'm not coding, you'll find me enjoying playing card games with friends trying out a new local cafe.
              I also love attending tech meetups and staying active in the developer community.
            </p>
          </div>
          <div id="social">
            <img id="portrait" src={portrait} alt="Portrait" />
          <p>
              <b>LinkedIn:</b>
              <a href="https://www.linkedin.com/in/lea-boyadjian/">Lea Boyadjian</a>
              <br />
              <b>Github:</b>
              <a href="https://github.com/lb5255">Lea Boyadjian</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
