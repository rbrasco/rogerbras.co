import React from 'react';
import { Route, MemoryRouter as Router, Switch } from 'react-router-dom';
import TabComponent from './components/tab';
import WButtons from './components/wButtons';
import StarSky from './components/starSky';
import PageCreator from './pages/pageCreator';
import {infos} from './info';

export default class App extends React.Component {

  componentDidMount () {

  }
  render () {

    return (
      <Router>
        <StarSky />
        {/*<div className="window">
            <WButtons />
            <TabComponent />
            <Switch>
              {Object.keys(infos).map(key => <Route path={"/"+key}><PageCreator key={key} info={infos[key]}/></Route>)}
    </Switch>
    </div>*/}
      </Router>
    );

  }

}