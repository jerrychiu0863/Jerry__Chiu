import React, { Component } from 'react';
import '../css/Banner.css';

class Banner extends Component {
  
  componentDidMount() {
    this.setAnimation();
  }
  
  setAnimation = () => {
    window.addEventListener('load', () => {
      const mainBanner = document.getElementsByClassName('Banner__header--main');
      const subBanner = document.getElementsByClassName('Banner__header--sub');
      mainBanner[0].classList.add('show');
      subBanner[0].classList.add('show');
    });
  }
  
  render() {
    return (
      <div className="Banner">
        <div>
          <div className="stripe stripe-0"></div>
          <div className="stripe stripe-1"></div>
          <div className="stripe stripe-2"></div>
          <div className="stripe stripe-3"></div>
        </div>
        
        <div className="Banner__container">
          <h1 className="Banner__header--main">Kuan-Jen Chiu</h1>
          <p className="Banner__header--sub">Web Developer / Front End Developer</p>
          <button className="btn btn-outline-dark" style={{padding: '8px 60px'}}>
            <span style={{marginRight: '10px'}}>
              <i className="fas fa-arrow-down"></i>
            </span>
            Resume
          </button>
        </div>      
      </div>
    );
  }
}

export default Banner;