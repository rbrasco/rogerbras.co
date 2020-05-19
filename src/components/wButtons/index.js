import React from 'react';
import MinimizeIcon from '@material-ui/icons/Minimize';
import MaximizeIcon from '@material-ui/icons/Maximize';
import CloseIcon from '@material-ui/icons/Close';

const WButtons = () =>  <div className="wBttns">
    <div className="wTitle">Personal Page Project - VS Code</div>
    <MinimizeIcon className="wIcons" fontSize="small"></MinimizeIcon>
    <MaximizeIcon className="wIcons" fontSize="small"></MaximizeIcon>
    <CloseIcon className="wIcons red" fontSize="small"></CloseIcon>
</div>;

export default WButtons;