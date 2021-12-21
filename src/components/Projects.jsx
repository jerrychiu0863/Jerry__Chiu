import React from 'react';
import '../css/Projects.css';

//Project images
import onePage from '../assets/projects/one_page_600x299.jpg';
import clueEvent from '../assets/projects/clue_event_600x299.jpg';
import clueArticle from '../assets/projects/clue_article_600x299.jpg';
import cssBGgenerator from '../assets/projects/css-generator_600x299.jpg';
import DecoMe from '../assets/projects/decome_600x299.jpg';
import todo from '../assets/projects/todo_600x299.jpg';
import Competnion from '../assets/projects/competnion_600x299.jpg';

//Components
import ProjectItem from './ProjectItem';
import HeaderDisplay from './HeaderDisplay';

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="container">
        <HeaderDisplay header={'Projects'} />
        <ProjectItem
          porjectOne={Competnion}
          titleOne={'Animal Adoption Website'}
          urlOne={'https://competnion.netlify.app/'}
          projectTwo={DecoMe}
          urlTwo={'https://jerrychiu0863.github.io/ecommerce/#/'}
          titleTwo={'DecoMe'}
        />
        <ProjectItem
          porjectOne={clueArticle}
          titleOne={'Blog Page'}
          urlOne={
            'https://www.clue.com.tw/webinars/Content/eDM/clue_article.html'
          }
          projectTwo={clueEvent}
          urlTwo={
            'https://www.clue.com.tw/webinars/Content/eDM/clue_event.html'
          }
          titleTwo={'Event Page'}
        />
        <ProjectItem
          porjectOne={onePage}
          titleOne={'One Page Adverstisement'}
          urlOne={'https://www.clue.com.tw/webinars/LandingPage/Get/Wyf0T'}
          projectTwo={cssBGgenerator}
          titleTwo={'Css Background Generator'}
          urlTwo={
            'https://jerrychiu0863.github.io/react_redux_transitionBackgroundGenerator/'
          }
        />
      </div>
    </div>
  );
};

export default Projects;
