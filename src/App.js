import React from 'react';
import { Route, MemoryRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header';
import PageCreator from './pages/pageCreator';
import {infos} from './info';

export default class App extends React.Component {

  componentDidMount () {

  }
  render () {

    return (
      <Router>
        <div className="main" >
            <Header />
            <Switch>
              {Object.keys(infos).map(key => <Route path={"/"+key}><PageCreator key={key} info={infos[key]}/></Route>)}
            </Switch>
        </div>

      </Router>
    );

  }

}