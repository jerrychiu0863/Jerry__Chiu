import React from 'react';
import '../css/Projects.css';
//import { HashLink as Link } from 'react-router-hash-link';
import winkel from '../assets/projects/winkel.jpg';

const Projects = () => {
  return (
    <div className="Projects">
      <div className="container">
        <h2 style={{textTransform: 'uppercase', marginBottom: '30px', fontWeight: '700', letterSpacing: '2px'}}>Projects</h2>
        <div className="row justify-content-between">
          <div className="col-6" style={{overflow: 'hidden'}}>
            <img src={winkel} width='100%' alt="win-kel" />
            <div>
              <a href="#">View Code</a>
              <a href="https://www.win-kel.com/" target="_blank">View Demo</a>
            </div>
         
          </div>
          <div className="col-6" style={{overflow: 'hidden'}}>
            <img src={winkel} width='100%' alt="win-kel" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;