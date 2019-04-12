import React from 'react';
import '../css/Projects.css';
//import { HashLink as Link } from 'react-router-hash-link';
import project1 from '../assets/projects/winkel.jpg';
import project2 from '../assets/projects/transitionBGgenerator.jpg';

const Projects = () => {
  return (
    <div className="Projects">
      <div className="container">
        <h2 style={{textTransform: 'uppercase', marginBottom: '30px', fontWeight: '700', letterSpacing: '2px'}}>Projects</h2>
        <div className="row">
          <div className="col-6" style={{overflow: 'hidden'}}>
            <img src={project1} width='100%' height='auto' alt="win-kel" />
             
          </div>
          <div className="col-6" style={{overflow: 'hidden'}}>
            <img src={project2} width='100%' height='100%' alt="win-kel" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;