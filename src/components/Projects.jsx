import React from 'react';
import '../css/Projects.css';

//Project images
import onePage from '../assets/projects/one_page_600x299.jpg';
import clueEvent from '../assets/projects/clue_event_600x299.jpg';
import clueArticle from '../assets/projects/clue_article_600x299.jpg';
import cssBGgenerator from '../assets/projects/css-generator_600x299.jpg';
import DecoMe from '../assets/projects/decome_600x299.jpg';
import Competnion from '../assets/projects/competnion_600x299.jpg';
import Red from '../assets/projects/red_600x299.jpg';
import Green from '../assets/projects/green_600x299.jpg';
import P5 from '../assets/projects/p5_600x299.jpg';
import Clue from '../assets/projects/clue_600x299.jpg';

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
          titleOne="Animal Adoption Website"
          urlOne="https://competnion.netlify.app/"
          projectTwo={Clue}
          urlTwo="https://jerrychiu0863.github.io/clue/"
          titleTwo="Columbia English Consulting Company"
        />
        {/* <ProjectItem
          porjectOne={clueArticle}
          titleOne="Blog Page"
          urlOne="https://www.clue.com.tw/webinars/Content/eDM/clue_article.html"
          projectTwo={clueEvent}
          urlTwo="https://www.clue.com.tw/webinars/Content/eDM/clue_event.html"
          titleTwo="Event Page"
        /> */}
        <ProjectItem
          porjectOne={DecoMe}
          titleOne="Deco me"
          urlOne="https://jerrychiu0863.github.io/ecommerce/#/"
          projectTwo={cssBGgenerator}
          titleTwo="Css Background Generator"
          urlTwo="https://jerrychiu0863.github.io/react_redux_transitionBackgroundGenerator/"
        />
        <ProjectItem
          porjectOne={Green}
          titleOne="Green"
          urlOne="https://jerrychiu0863.github.io/multi-layer-banner/"
          projectTwo={P5}
          titleTwo="P5 Projects"
          urlTwo="https://openprocessing.org/user/307138?view=sketches"
        />
      </div>
    </div>
  );
};

export default Projects;
