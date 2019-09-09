import React from 'react';
import '../css/Projects.css';

//Project images
import winkel from '../assets/projects/winkel_600x299.jpg';
import cssBGgenerator from '../assets/projects/css-generator_600x299.jpg';
import DecoMe from '../assets/projects/decome_600x299.jpg';
import blog from '../assets/projects/blog_600x299.jpg';
import news from '../assets/projects/news_600x299.jpg';
import todo from '../assets/projects/todo_600x299.jpg';

//Components
import ProjectItem from './ProjectItem';
import HeaderDisplay from './HeaderDisplay';

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="container">
        <HeaderDisplay header={'Projects'} />
        <ProjectItem
          porjectOne={winkel}
          titleOne={'Win-Kel'}
          urlOne={'https://www.win-kel.com/'}
          projectTwo={DecoMe}
          urlTwo={'https://jerrychiu0863.github.io/ecommerce/#/'}
          titleTwo={'DecoMe'}
        />
        <ProjectItem
          porjectOne={cssBGgenerator}
          titleOne={'Css Background Generator'}
          urlOne={
            'https://jerrychiu0863.github.io/react_redux_transitionBackgroundGenerator/'
          }
          projectTwo={blog}
          titleTwo={'Blog Engine'}
          urlTwo={'https://stark-brook-84904.herokuapp.com/'}
        />
        <ProjectItem
          porjectOne={todo}
          titleOne={'The Eisenhower Matrix Todo App'}
          urlOne={'https://jerrychiu0863.github.io/react_todo_app/'}
          projectTwo={news}
          titleTwo={'News Search Engine'}
          urlTwo={'https://jerrychiu0863.github.io/react_news_app/'}
        />
      </div>
    </div>
  );
};

export default Projects;
