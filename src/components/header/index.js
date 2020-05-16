import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const writeTab = ({key, label, active = false}) => <div className={active ? "tab" : "tab shadow"} id={key}>
{label}
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
  const tabInfo = [{key: "homepage", label:"info.yml", "active": true}, {key: "aboutme", label:"personal.yml"}]
  return (
    <div className="app__header">
      {tabBar(tabInfo)}
      {path(tabInfo[0])}
    </div>
  );

};

export default Header;
