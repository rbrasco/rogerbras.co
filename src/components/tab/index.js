/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { paths } from '../../dictionary';
import CloseIcon from '@material-ui/icons/Close';
import { isMobile } from 'react-device-detect';


const writeTab = ({ key, label, active = false }) => <div className={active ? 'tab' : 'tab shadow'} key={key}>
  <Link className="link" to={'/' + key}>
    <button className="tabBttn">
      {label}
    </button>
  </Link>
  <Link className={active ? 'linkX' : 'linkX dis'} to={'/'} >
    <CloseIcon className={active ? 'xBttn' : 'xBttn shadow'} fontSize={isMobile ? 'large' : 'small'}></CloseIcon>
  </Link>
</div>;

const tabBar = (tabs) =>
  <div className="tabBar" id="tB">
    {tabs.map(tab => writeTab(tab))}
  </div>;

const path = ({ dir, label }, isSB) => <div className={ !isSB ? 'path' : 'path moved'}>
  <div className="path_text">{'rogerbras.co >'}</div>
  <div className="path_text">{dir + ' >'}</div>
  <div className="path_text">{label}</div>
</div>;


function rafAsync () {

  return new Promise(resolve => {

    requestAnimationFrame(resolve); // faster than set time out

  });

}

function checkElement (selector) {

  if (document.getElementById(selector) === null) {

    return rafAsync().then(() => checkElement(selector));

  }

  return Promise.resolve(
    document.getElementById(selector).scrollWidth > document.getElementById(selector).clientWidth);

}

const TabComponent = () => {

  const location = useLocation().pathname.replace('/', '');
  const tabIndex = Object.keys(paths).map(key => key);
  const tabInfo = Object.keys(paths).map(key => ({ ...paths[key], 'active': location === key }));

  const [isSB, setSB] = React.useState(true);

  checkElement('tB').then((res) => {

    setSB(res);

  });

  React.useEffect(() => {

    function handleResize () {

      checkElement('tB').then(res => {

        setSB(res);

      });

    }
    window.addEventListener('resize', handleResize);

  });

  return (
    <div className="tabComponent">
      {tabBar(tabInfo)}
      {location === '' ? null : path(tabInfo[tabIndex.indexOf(location)], isSB)}
    </div>
  );

};

export default TabComponent;
