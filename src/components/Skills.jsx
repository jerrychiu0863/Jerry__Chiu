import React, { Component } from 'react';
import '../css/Skills.css';

const frontEndLists = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Bootstrap', 'Sass', 'jQuery'];
const backEndLists = ['Node.js', 'Express', 'MongoDB', 'Mongoose'];
const miscellaneousLists = ['Git', 'Github', 'Gitlab', 'NPM', 'Heroku', 'Yarn'];

class Skills extends Component {
  
  renderList = (lists) => {
    return lists.map(list => <li className="list-group-item">{list}</li>)
  }
  
  render() {
    return (
    <div className="Skills container">
       <h2>Skills</h2>
         <div className="Skills__container">
           <div className="card" style={{textAlign: 'center', borderTop: '5px solid #f7931d'}}>
             <p className="card-title">Front End</p> 
             <ul className="list-group list-group-flush">
               {this.renderList(frontEndLists)}
              </ul>
            </div>
          <div className="card">
             <p className="card-title">Back End</p> 
           <ul className="list-group list-group-flush">
             {this.renderList(backEndLists)}

            </ul>
          </div>
          <div className="card">
             <p className="card-title">Miscellaneous</p> 
           <ul className="list-group list-group-flush">
             {this.renderList(miscellaneousLists)}

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;