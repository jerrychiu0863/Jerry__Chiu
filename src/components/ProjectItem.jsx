import React from 'react';
import '../css/ProjectItem.css';
//import project1 from '../assets/projects/winkel.jpg';
//import project2 from '../assets/projects/transitionBGgenerator.jpg';

const ProjectItem = (props) => {
  const { rulOne, urlTwo, porjectOne, projectTwo, titleOne, titleTwo } = props;
  return(
    <div className="ProjectItem row">
      <div className="col-sm-12 col-md-6">
        <div className="ProjectItem__container">
           <a href="https://www.win-kel.com" target="_blank" rel="noopener noreferrer">
             <img
               src={porjectOne} 
               width='100%' 
               height='100%' 
               alt="win-kel" 
             />
           </a>
           <div className="ProjectItem__titleContainer">
              <p className="ProjectItem__titleContainer--title">
                {titleOne}
              </p>
           </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="ProjectItem__container">
           <img 
             src={projectTwo} 
             width='100%' 
             height='100%' 
             alt="win-kel" 
           />
           <div className="ProjectItem__titleContainer">
              <p className="ProjectItem__titleContainer--title">
                {titleTwo}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;