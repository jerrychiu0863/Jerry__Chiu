import React, { Component } from 'react';
import '../css/Skills.css';

import Card from './Card';

const skillLists = [
  {
    id: 1,
    type: 'Front end',
    content: 'HTML / CSS / JavaScript / React / Redux / Bootstrap / jQuery / Sass / RWD / React Router / Ajax'
  },
  {
    id: 2,
    type: 'Back end',
    content: 'Node.js / Express / MongoDB / Mongoose'
  },
  {
    id: 3,
    type: 'Misc.',
    content: 'Git / Github / Gitlab / NPM / Yarn / Heroku / Google Analytics'
  }
];

class Skills extends Component {
  
  renderList = () => {
    return skillLists.map(list => <Card 
      key={list.id} 
      id={list.id} 
      type={list.type} 
      content={list.content} 
    />);
  }
  
  render() {
    return (
    <div className="Skills container">
       <h2 style={{textTransform: 'uppercase', marginBottom: '30px', fontWeight: '900', letterSpacing: '2px', fontSize: '45px'}}>Skills</h2>
         <div className="Skills__container">
           {this.renderList()}
         </div>
      </div>
    );
  }
}

export default Skills;