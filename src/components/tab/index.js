import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {paths} from "../../dictionary";
import CloseIcon from '@material-ui/icons/Close';

const writeTab = ({key, label, active = false}) => <div className={active ? "tab" : "tab shadow"} key={key}>
  <Link className="link" to={"/"+key}>
    <button className="tabBttn">
      <div className="tabLabel">{label}</div>
    </button>
  </Link>
  <Link className={active? "linkX" : "linkX dis"} to={"/"} ><CloseIcon className={active ? "xBttn" : "xBttn shadow"} fontSize="small"></CloseIcon></Link>
</div>;

const tabBar = (tabs) => <div className="tabBar">
  {tabs.map(tab => writeTab(tab))}
</div>;

const path = ({dir, label}) => <div className="path">
  <div className="path_text">{"rogerbras.co >"}</div>
  <div className="path_text">{dir+ " >"}</div>
  <div className="path_text">{label}</div>
</div>;

const TabComponent = (props) => {
  const location = useLocation().pathname.replace("/","");
  const tabIndex = Object.keys(paths).map(key => key);
  const tabInfo = Object.keys(paths).map(key => ( {...paths[key], "active": location === key }))
  console.log(location);
  return (
    <div className="tabComponent">
      {tabBar(tabInfo)}
      {location === "" ? null: path(tabInfo[tabIndex.indexOf(location)])}
    </div>
  );
};

export default TabComponent;
