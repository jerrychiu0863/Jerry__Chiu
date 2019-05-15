import React, { Component } from 'react';
import '../css/Contact.css';

const contactLists = [
  {  
    icon: 'fas fa-map-pin',
    body: 'San Francisco, CA, US'
  },
  {  
    icon: 'fas fa-phone',
    body: '+1628-666-7201'
  },
  {  
    icon: 'fas fa-envelope',
    body: 'm08632000@hotmail.com'
  },
  {  
    icon: 'fab fa-github',
    body: 'https://github.com/jerrychiu0863'
  }
];

class Contact extends Component {
  
  renderContactInfo = (lists) => {
    return lists.map((list, index) => 
      <li className="Contact__list--item" key={index}>
        <i className={`Contact__list--icon ${list.icon}`}></i>
        <p className="Contact__list--info">
          {list.body}
        </p>
      </li>
    );
  }
  
  render() {
    return (
      <div className="Contact container" id="contact">
        <div className="Contact__card row">
        <div className="Contact__left col-12 col-sm-5">
          <p>Contact Info</p>
        </div>
        <div className="Contact__right col-12 col-sm-7">
          <ul className="Contact__list">
            {this.renderContactInfo(contactLists)}
          </ul>
         </div>
      </div>
    </div>
   );
  }
}

export default Contact;