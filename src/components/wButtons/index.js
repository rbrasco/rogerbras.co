import React from 'react';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Maximize';
import CloseIcon from '@material-ui/icons/Close';
import { isMobile } from 'react-device-detect';


const WButtons = () =>  <div className="wBttns">
  <div className="trans"></div>
  <div className="wTitle">Personal Page Project - CODE EDITOR</div>
  <div className="wIconsWrapper">
    <MinimizeIcon className="wIcons" fontSize={isMobile ? 'large' : 'small'}></MinimizeIcon>
    <MaximizeIcon className="wIcons" fontSize={isMobile ? 'large' : 'small'}></MaximizeIcon>
    <CloseIcon className="wIcons red" fontSize={isMobile ? 'large' : 'small'}></CloseIcon>
  </div>
</div>;

export default WButtons;
