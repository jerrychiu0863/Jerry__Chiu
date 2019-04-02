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
       <h2 style={{textTransform: 'uppercase', marginBottom: '30px', fontWeight: '700', letterSpacing: '2px'}}>Skills</h2>
         <div className="Skills__container">
           <div className="card" style={{textAlign: 'center', borderTop: '5px solid #f7931d'}}>
             <h3 className="card-title" style={{borderBottom: '1px solid rgba(0,0,0,.1)', padding: '0 0 10px 0'}}>Front End</h3> 
             <p style={{textAlign: 'left', lineHeight: '1.8', color: '#666'}}>HTML / CSS / JavaScript / React / Redux / Bootstrap / jQuery / Sass / RWD / React Router</p>
          </div>
          <div className="card" style={{textAlign: 'center', borderTop: '5px solid #1a82e2'}}>
             <h3 className="card-title" style={{borderBottom: '1px solid rgba(0,0,0,.1)', padding: '0 0 10px 0'}}>Back End</h3> 
             <p style={{textAlign: 'left', lineHeight: '1.8'}}>Node.js / Express / MongoDB / Mongoose</p>
            </div>
          <div className="card" style={{textAlign: 'center', borderTop: '5px solid #36d081'}}>
             <h3 className="card-title" style={{borderBottom: '1px solid rgba(0,0,0,.1)', padding: '0 0 10px 0'}}>Miscellaneous</h3> 
             <p style={{textAlign: 'left', lineHeight: '1.8'}}>Git / Github / Gitlab / NPM / Yarn / Heroku</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;