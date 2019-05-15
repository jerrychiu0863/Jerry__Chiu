import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      width: window.innerWidth
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }
  
  updateWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  }
  
  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    console.log(el);
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth'
    });
  }

    render() {
    return (
      <div className="App">
        <NavBar 
          width={this.state.width}
          onScrollWithOffset={this.scrollWithOffset}
        />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
