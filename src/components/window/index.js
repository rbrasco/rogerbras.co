import React from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import TabComponent from './../tab';
import WButtons from './../wButtons';
import LinePrinter from './../linePrinter';
import Homepage from './../homepage';

const Window = ({ dict, isMobile }) => {

  return (<div className={isMobile ? 'mobile' : 'window' }>
    <WButtons />
    <TabComponent />
    <Switch location={useLocation()}>
      {Object.keys(dict).map(key => <Route path={'/' + key} key={key} component={() => <LinePrinter info={dict[key]}/>}/>)}
      <Route exact path="/" component={Homepage}/>
      <Redirect to="/" />
    </Switch>
  </div>);

};

export default Window;
