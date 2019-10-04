import React from 'react';
// import { Route, MemoryRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Homepage from './pages/homepage';
import About from './pages/about';
import Portofolio from './pages/portofolio';
import Experience from './pages/experience';
import Contact from './pages/contact';

export default class App extends React.Component {

  componentDidMount () {

  }
  render () {

    return (
      <div className="main" >
        <div className="header">
          <Header />
        </div>
        <div className="pagesContainer">
          <Homepage />
          <About />
          <Portofolio />
          <Experience />
          <Contact />
        </div>
      </div>
    );

  }

}