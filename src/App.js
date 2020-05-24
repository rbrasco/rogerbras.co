import React from 'react';
import { Route, MemoryRouter as Router, Switch } from 'react-router-dom';
import TabComponent from './components/tab';
import WButtons from './components/wButtons';
import StarField from './components/starField';
import PageCreator from './pages/pageCreator';
import {dict} from './dictionary';

export default class App extends React.Component {

  componentDidMount () {

  }
  render () {

    return (
      <Router>
        <div className="window">
          <WButtons />
          <TabComponent />
          <Switch>
            {Object.keys(dict).map(key => <Route path={"/"+key} key={key}><PageCreator info={dict[key]}/></Route>)}
          </Switch>
        </div>
        <StarField />
      </Router>
    );

  }

}