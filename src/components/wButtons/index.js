import React from 'react';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Maximize';
import CloseIcon from '@material-ui/icons/Close';

const WButtons = () =>  <div className="wBttns">
    <div className="wSpace"></div>
    <div className="wTitle">Personal Page Project - CODE EDITOR</div>
    <div className="wIconsWrapper">
    <MinimizeIcon className="wIcons" fontSize="small"></MinimizeIcon>
    <MaximizeIcon className="wIcons" fontSize="small"></MaximizeIcon>
    <CloseIcon className="wIcons red" fontSize="small"></CloseIcon>
    </div>
</div>;

export default WButtons;