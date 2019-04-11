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
    return lists.map(list => 
      <li style={{display: 'flex', justifyContent: 'start', alignItems: 'center', marginBottom: '10px'}}>
        <i className={`${list.icon}`} style={{fontSize: '18px', color: '#f5ae51', marginRight: '10px'}}></i>
        <p style={{color: '#666', fontWeight: '700', margin: '0', fontSize:'14px'}}>
          {list.body}
        </p>
      </li>
    );
  }
  
  render() {
    return (
      <div className="Contact container">
        <div className="Contact__card row">
        <div className="Contact__left col-5">
          <p>Contact Info</p>
        </div>
        <div className="col-7">
          <ul style={{margin: '65px 20px 0 15px'}}>
            {this.renderContactInfo(contactLists)}
          </ul>
         </div>
      </div>
    </div>
   );
  }
}

export default Contact;