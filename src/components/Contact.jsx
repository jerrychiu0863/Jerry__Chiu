import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <div className="Contact container">
      <h2 style={{textTransform: 'uppercase', marginBottom: '30px', fontWeight: '700', letterSpacing: '2px'}}>Contact</h2>
      <div className="Contact__card row">
        <div className="col-4" style={{margin: 'auto 0'}}>
          <i className="fas fa-map-pin" style={{fontSize: '50px', color: '#f5ae51'}}></i>
          <p style={{marginTop: '20px', color: '#666', fontWeight: '700'}}>San Francisco, CA, US</p>
        </div>
        <div className="col-4" style={{margin: 'auto 0'}}>
          <i className="fas fa-phone" style={{fontSize: '50px', color: '#f5ae51'}}></i>
          <p style={{marginTop: '20px', color: '#666', fontWeight: '700'}}>628-666-7201</p>
        </div>
        <div className="col-4" style={{margin: 'auto 0'}}>
          <i className="fas fa-envelope" style={{fontSize: '50px'}}></i>
          <p style={{marginTop: '20px', color: '#666'}}>m08632000@hotmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;