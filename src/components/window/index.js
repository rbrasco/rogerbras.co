import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TabComponent from './../tab';
import WButtons from './../wButtons';
import LinePrinter from './../linePrinter';
import Homepage from './../homepage';

const Window = ({dict, isMobile}) =>
{
    console.log(isMobile)
  return(<div className={!isMobile? "window" : "mobile"}>
  <WButtons />
  <TabComponent />
  <Switch>
    <Route path="/" exact ><Homepage /></Route>
    {Object.keys(dict).map(key => <Route path={"/"+key} key={key}><LinePrinter info={dict[key]}/></Route>)}
  </Switch>
</div>)};

export default Window;