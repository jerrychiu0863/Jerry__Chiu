import React from 'react';
import '../css/Projects.css';

//Project images
import project1 from '../assets/projects/winkel.jpg';
import cssBGgenerator from '../assets/projects/cssGenerator.jpg';
import blog from '../assets/projects/blog.jpg'
import news from '../assets/projects/news.jpg'
import todo from '../assets/projects/todo.jpg'
import artist from '../assets/projects/artist.jpg'

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
          projectTwo={news}
          titleTwo={'News Search Engine'}
          urlTwo={'https://jerrychiu0863.github.io/react_news_app/'}
        />
        <ProjectItem 
          porjectOne={todo}
          titleOne={'The Eisenhower Matrix Todo App'}
          urlOne={'https://jerrychiu0863.github.io/react_todo_app/'}
          projectTwo={artist}
          titleTwo={'Artist\'s Portfolio'}
          urlTwo={'https://jerrychiu0863.github.io/artist_web/'}
        />
      </div>
    </div>
  );
}

export default Projects;