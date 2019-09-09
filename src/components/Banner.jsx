import React, { Component } from 'react';
import '../css/Banner.css';

class Banner extends Component {
  componentDidMount() {
    window.addEventListener('DOMContentLoaded', () => {
      this.removeStopClass();
      //Hide sripes after animation is over
      setTimeout(() => {
        this.hideStripes();
        this.setHeaderAnimation();
      }, 1800);
    });
  }

  setHeaderAnimation = () => {
    const mainBanner = document.getElementsByClassName('Banner__header--main');
    const subBanner = document.getElementsByClassName('Banner__header--sub');
    mainBanner[0].classList.add('show');
    subBanner[0].classList.add('show');
  };

  hideStripes = () => {
    const stripes = document.querySelectorAll('.stripe');
    //Different methods to Loop same els to add new class
    /*[].forEach.call(stripes, stripe => {
      stripe.classList.add('hide');
      console.log(stripe);
    });*/

    /*[...stripes].forEach(stripe => {
       stripe.classList.add('hide');
    })*/

    for (const stripe of stripes) {
      stripe.classList.add('hide');
    }
  };

  removeStopClass = () => {
    const stripes = document.querySelectorAll('.stripe');
    for (const stripe of stripes) {
      stripe.classList.remove('stop');
    }
  };

  render() {
    return (
      <div className="Banner">
        <div>
          <div className="stripe stripe-0 stop" />
          <div className="stripe stripe-1 stop" />
          <div className="stripe stripe-2 stop" />
          <div className="stripe stripe-3 stop" />
        </div>
        <div className="Banner__container">
          <h1 className="Banner__header--main">Kuan-Jen Chiu</h1>
          <p className="Banner__header--sub">
            Web Developer / Front End Developer
          </p>
        </div>
      </div>
    );
  }
}

export default Banner;
