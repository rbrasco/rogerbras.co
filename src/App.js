import React from 'react';
import { Route, MemoryRouter as Router } from 'react-router-dom';
import Homepage from './pages/homepage';

export default class App extends React.Component {

  componentDidMount () {

  }
  render () {

    return (

        <Router>
          <Route path="/" component={Homepage}/>
        </Router>
    );

  }

}