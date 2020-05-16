import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {paths} from "../../info";

const writeTab = ({key, label, active = false}) => <div className={active ? "tab" : "tab shadow"} key={key}>
<Link className="link" to={"/"+key}>{label}</Link>
<div className={active ? "xBttn" : "xBttn shadow"}>X</div>
</div>;

const tabBar = (tabs) => <div className="tabBar">
  {tabs.map(tab => writeTab(tab))}
</div> 

const path = ({key, label}) => <div className="path">
      <div className="path_text">{"rogerbras.co >"}</div>
      <div className="path_text">{key+ " >"}</div>
      <div className="path_text">{label}</div>
      </div>;

const Header = (props) => {
  const location = useLocation().pathname.replace("/","");
  const tabIndex = Object.keys(paths).map(key => key);
  const tabInfo = Object.keys(paths).map(key => ( {"key": key, "label": paths[key], "active": location === key }))

  return (
    <div className="app__header">
      {tabBar(tabInfo)}
      {location === "" ? null: path(tabInfo[tabIndex.indexOf(location)])}
    </div>
  );
};

export default Header;
