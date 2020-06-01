import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Window from './components/window';
import StarField from './components/starField';
import { dict } from './dictionary';
import { isMobile } from 'react-device-detect';

export default class App extends React.Component {

  componentDidMount () {

  }
  render () {

    return (
      <BrowserRouter>
        <Window dict={dict} isMobile={isMobile}/>
        {isMobile ? null : <StarField />}
      </BrowserRouter>
    );

  }

}
