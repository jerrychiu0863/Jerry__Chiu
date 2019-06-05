import React from 'react';
import '../css/ProjectItem.css';

const ProjectItem = (props) => {
  const { urlOne, urlTwo, porjectOne, projectTwo, titleOne, titleTwo } = props;
  return(
    <div className="ProjectItem row">
      <div className="col-sm-12 col-md-6">
        <div className="ProjectItem__container">
           <a href={urlOne} target="_blank" rel="noopener noreferrer">
             <img
               className="ProjectItem__container--img"
               src={porjectOne} 
               alt="project" 
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
          <a href={urlTwo} target="_blank" rel="noopener noreferrer">
            <img
              className="ProjectItem__container--img" 
              src={projectTwo} 
              alt="project" 
            />
          </a>
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