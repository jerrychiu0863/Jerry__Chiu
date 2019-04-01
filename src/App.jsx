import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner';
import Skills from './components/Skills';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
