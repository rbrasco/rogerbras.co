import React from 'react';
import { Route, MemoryRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header';
import PageCreator from './pages/pageCreator';
import {infos} from './info';

import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Maximize';
import CloseIcon from '@material-ui/icons/Close';


export default class App extends React.Component {

  componentDidMount () {

  }
  render () {

    return (
      <Router>
        
        <div className="window">
            <div className="wBttns">
              <div className="wTitle">Personal Page Project - VS Code</div>
              <div className="wIcons"><MinimizeIcon fontSize="small"></MinimizeIcon></div>
              <div className="wIcons"><MaximizeIcon fontSize="small"></MaximizeIcon></div>
              <div className="wIcons red"><CloseIcon fontSize="small"></CloseIcon></div>
            </div>
            <Header />
            <Switch>
              {Object.keys(infos).map(key => <Route path={"/"+key}><PageCreator key={key} info={infos[key]}/></Route>)}
            </Switch>
        </div>

      </Router>
    );

  }

}