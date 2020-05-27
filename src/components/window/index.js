import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TabComponent from './../tab';
import WButtons from './../wButtons';
import LinePrinter from './../linePrinter';

const Window = ({dict}) =>
<div className="window">
  <WButtons />
  <TabComponent />
  <Switch>
    {Object.keys(dict).map(key => <Route path={"/"+key} key={key}><LinePrinter info={dict[key]}/></Route>)}
  </Switch>
</div>;

export default Window;