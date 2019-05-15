import React from 'react';
import '../css/Projects.css';
//import { HashLink as Link } from 'react-router-hash-link';

//Project images
import project1 from '../assets/projects/winkel.jpg';
import cssBGgenerator from '../assets/projects/cssGenerator.jpg';
import blog from '../assets/projects/blog.jpg'

import ProjectItem from './ProjectItem';
import HeaderDisplay from './HeaderDisplay';

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="container">
        <HeaderDisplay
          header={'Projects'}
        />
        <ProjectItem 
          porjectOne={project1}
          titleOne={'Win-Kel'}
          urlOne={'https://www.win-kel.com'}
          projectTwo={blog}
          urlTwo={'https://stark-brook-84904.herokuapp.com/'}
          titleTwo={'Blog Engine'}
        />
        <ProjectItem 
          porjectOne={cssBGgenerator}
          titleOne={'Css Background Generator'}
          urlOne={'https://jerrychiu0863.github.io/react_redux_transitionBackgroundGenerator/'}
          projectTwo={project1}
          titleTwo={'Transition Background Generator'}
        />
      </div>
    </div>
  );
}

export default Projects;