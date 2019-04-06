import React, { Component } from 'react';
import '../css/Skills.css';

/*
const frontEndLists = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Bootstrap', 'Sass', 'jQuery', 'RWD', 'React Router'];
const backEndLists = ['Node.js', 'Express', 'MongoDB', 'Mongoose'];
const miscellaneousLists = ['Git', 'Github', 'Gitlab', 'NPM', 'Heroku', 'Yarn'];
*/
class Skills extends Component {
  
  renderList = (lists) => {
    return lists.map(list => <li className="list-group-item">{list}</li>)
  }
  
  render() {
    return (
    <div className="Skills container">
       <h2 style={{textTransform: 'uppercase', marginBottom: '30px', fontWeight: '900', letterSpacing: '2px', fontSize: '45px'}}>Skills</h2>
         <div className="Skills__container">
           <div className="card" style={{textAlign: 'center'}}>
             <div className="card__title card__title-1"><span>Front end</span></div>
             {/*<h3 className="card-title" style={{borderBottom: '1px solid rgba(0,0,0,.1)', padding: '0 0 10px 0'}}>Front End</h3>*/} 
             <p style={{textAlign: 'left', lineHeight: '1.8', color: '#666'}}>HTML / CSS / JavaScript / React / Redux / Bootstrap / jQuery / Sass / RWD / React Router / Ajax</p>
           </div>
            <div className="card" style={{textAlign: 'center'}}>
              <div className="card__title card__title-2"><span>Back end</span></div>
              <p style={{textAlign: 'left', lineHeight: '1.8'}}>Node.js / Express / MongoDB / Mongoose</p>
            </div>
            <div className="card" style={{textAlign: 'center'}}>
              <div className="card__title card__title-3"><span>Misc.</span></div>
              <p style={{textAlign: 'left', lineHeight: '1.8'}}>Git / Github / Gitlab / NPM / Yarn / Heroku</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;