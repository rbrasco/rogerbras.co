import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {paths} from "../../info";
import CloseIcon from '@material-ui/icons/Close';

const writeTab = ({key, label, active = false}) =>
<Link className="link" key={label} to={"/"+key}>
  <button className={active ? "tab" : "tab shadow"}>
    <div className="tabName">{label}</div>
    <Link className="linkX" to={"/"}><CloseIcon className={active ? "xBttn" : "xBttn shadow"} fontSize="small"></CloseIcon></Link>
    </button>
  </Link>;

const tabBar = (tabs) => <div className="tabBar">
  {tabs.map(tab => writeTab(tab))}
</div>;

const path = ({key, label}) => <div className="path">
  <div className="path_text">{"rogerbras.co >"}</div>
  <div className="path_text">{key+ " >"}</div>
  <div className="path_text">{label}</div>
</div>;

const TabComponent = (props) => {
  const location = useLocation().pathname.replace("/","");
  const tabIndex = Object.keys(paths).map(key => key);
  const tabInfo = Object.keys(paths).map(key => ( {"key": key, "label": paths[key], "active": location === key }))

  return (
    <div className="tabComponent">
      {tabBar(tabInfo)}
      {location === "" ? null: path(tabInfo[tabIndex.indexOf(location)])}
    </div>
  );
};

export default TabComponent;
