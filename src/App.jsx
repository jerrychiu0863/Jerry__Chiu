import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
