import React from 'react';
import '../css/Skills.css';

import Card from './Card';
import HeaderDisplay from './HeaderDisplay';

const skillLists = [
  {
    id: 1,
    type: 'Front end',
    content:
      'HTML / CSS / JavaScript / React / Redux / Bootstrap / jQuery / Sass / RWD / React Router / Ajax / GatsbyJS',
  },
  {
    id: 2,
    type: 'Design Tool',
    content: 'AdobeXD / Figma / Illustrator / Photoshop',
  },
  {
    id: 3,
    type: 'Misc.',
    content: 'Git / Github / Gitlab / NPM / Yarn / Heroku',
  },
];

const Skills = () => {
  const renderList = (lists) => {
    return lists.map((list) => (
      <Card
        key={list.id}
        id={list.id}
        type={list.type}
        content={list.content}
      />
    ));
  };

  return (
    <div className="Skills container" id="skills">
      <HeaderDisplay header={'Skills'} />
      <div className="Skills__container row">{renderList(skillLists)}</div>
    </div>
  );
};

export default Skills;
