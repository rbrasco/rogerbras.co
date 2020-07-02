/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { paths } from '../../dictionary';
import CloseIcon from '@material-ui/icons/Close';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

import { isMobile } from 'react-device-detect';

const writeTab = ({ key, label, active = false }) => <div className={active ? 'tab' : 'tab shadow'} key={key}>
  <Link className="link" to={'/' + key}>
    <PriorityHighIcon className="exclamation" fontSize="small"/>
    <button className="tabBttn">
      {label}
    </button>
  </Link>
  <Link className={active ? 'linkX' : 'linkX dis'} to={'/'} >
    <CloseIcon className={active ? 'xBttn' : 'xBttn shadow'} fontSize={isMobile ? 'large' : 'small'}></CloseIcon>
  </Link>
</div>;

const e = 0.2;
const tabBar = (tabs, isRoL, isSB) =>
  <div className="tabBar" id="tB">
    {tabs.map(tab => writeTab(tab))}
    {isSB && isRoL < 1 - e ? <MoreHorizIcon fontSize={isMobile ? 'large' : 'small'} className={isMobile ? 'rightOF large' : 'rightOF'}/> : null}
    {isSB && isRoL > e ? <MoreHorizIcon fontSize={isMobile ? 'large' : 'small'} className={isMobile ? 'leftOF large' : 'leftOF'}/> : null}
  </div>;

const path = ({ dir, label }, isSB) => <div className={ !isSB ? 'path' : 'path moved'}>
  <div className="path_text">{'rogerbras.co >'}</div>
  <div className="path_text">{dir + ' >'}</div>
  <div className="path_text">{label}</div>
</div>;

function rafAsync () {

  return new Promise(resolve => {

    requestAnimationFrame(resolve);

  });

}

function checkSB (selector) {

  if (document.getElementById(selector) === null) {

    return rafAsync().then(() => checkSB(selector));

  }

  return Promise.resolve(
    document.getElementById(selector).scrollWidth > document.getElementById(selector).clientWidth);

}

function checkRoL (selector) {

  const element = document.getElementById(selector);

  if (element === null) {

    return rafAsync().then(() => checkRoL(selector));

  }

  return Promise.resolve(
    element.scrollLeft / (element.scrollWidth - element.clientWidth));

}

function checkT (selector, isT, location) {

  const element = document.getElementById(selector);

  if (element === null) {

    return rafAsync().then(() => checkT(selector, isT, location));

  }

  if (isT && location === 'teaching') {

    element.scrollLeft = Math.round(element.scrollWidth - element.clientWidth);

  }

  return Promise.resolve(false);

}

const TabComponent = () => {

  const location = useLocation().pathname.replace('/', '');
  const tabIndex = Object.keys(paths).map(key => key);
  const tabInfo = Object.keys(paths).map(key => ({ ...paths[key], 'active': location === key }));

  const [isSB, setSB] = React.useState(true);
  const [isRoL, setRoL] = React.useState(0);
  const [isT, setT] = React.useState(true);

  checkRoL('tB').then((res) => {

    setRoL(res);

  });

  checkSB('tB').then((res) => {

    setSB(res);

  });

  checkT('tB', isT, location).then(res => {

    setT(res);

  });

  React.useEffect(() => {

    function handleResize () {

      checkSB('tB').then(res => {

        setSB(res);

      });

    }
    window.addEventListener('resize', handleResize);

    function handleScroll () {

      checkRoL('tB').then(res => {

        setRoL(res);

      });

    }
    document.getElementById('tB').addEventListener('scroll', handleScroll);

    /* function handleT () {

      checkT('tB', isT, location).then(res => {

        setT(res);

      });

    }
    window.addEventListener('load', handleT);*/

  });

  return (
    <div className="tabComponent">
      {tabBar(tabInfo, isRoL, isSB)}
      {location === '' ? null : path(tabInfo[tabIndex.indexOf(location)], isSB)}
    </div>
  );

};

export default withRouter(TabComponent);
