import React, { Component } from 'react';
import '../css/Banner.css';

class Banner extends Component {
  
  componentDidMount() {
    
    /*window.addEventListener('DOMContentLoaded', () => {
      this.removeStopClass();
      setTimeout(() => {
        this.setAnimation();
        setTimeout(() => {
          this.hideStripes();
        }, 800);
      }, 1200);
    });*/
    
    window.addEventListener('DOMContentLoaded', () => {
      this.removeStopClass();
      setTimeout(() => {
        this.hideStripes();
        this.setAnimation();
      }, 2000);
    });
    
  }
  
  setAnimation = () => {
    const mainBanner = document.getElementsByClassName('Banner__header--main');
    const subBanner = document.getElementsByClassName('Banner__header--sub');
    mainBanner[0].classList.add('show');
    subBanner[0].classList.add('show');
  }
  
  hideStripes = () => {
    const stripes = document.querySelectorAll('.stripe');
    //Loop same els to add new class
    /*[].forEach.call(stripes, stripe => {
      stripe.classList.add('hide');
      console.log(stripe);
    });*/
    
    /*[...stripes].forEach(stripe => {
       stripe.classList.add('hide');
    })*/
    
    for(const stripe of stripes) {
        stripe.classList.add('hide');
    };
  }
  
  removeStopClass = () => {
    const stripes = document.querySelectorAll('.stripe');
    for(const stripe of stripes) {
      stripe.classList.remove('stop');
    };
  }
  
  render() {
    //console.log(document.readyState);
    return (
      <div className="Banner">
        <div>
          <div className="stripe stripe-0 stop"></div>
          <div className="stripe stripe-1 stop"></div>
          <div className="stripe stripe-2 stop"></div>
          <div className="stripe stripe-3 stop"></div>
        </div>
        
        <div className="Banner__container">
          <h1 className="Banner__header--main">Kuan-Jen Chiu</h1>
          <p className="Banner__header--sub">Web Developer / Front End Developer</p>
          {/*<button className="btn btn-outline-dark" style={{padding: '8px 60px'}}>
            <span style={{marginRight: '10px'}}>
              <i className="fas fa-arrow-down"></i>
            </span>
            Resume
          </button>*/}
        </div>      
      </div>
    );
  }
}

export default Banner;