import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import Window from './components/window';
import StarField from './components/starField';
import {dict} from './dictionary';
import {isMobile} from 'react-device-detect';

export default class App extends React.Component {

  componentDidMount () {

  }
  render () {

    return (
      <Router>
        <Window dict={dict} />
        {isMobile? null : <StarField />}
      </Router>
    );

  }

}