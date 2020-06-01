import React from 'react';
import AsciiCanvas from '../asciiCanvas';
import { withRouter } from 'react-router-dom';

const Homepage = () =>
  <div className="default">
    <AsciiCanvas className="dLogo" />
    <div className="dTextWrapper">
      <p className="dText"><span className="dBlue">rogerbras.co</span></p>
      <p className="dText">Welcome to my original idea for a <span className="dBlue">CV page</span></p>
      <p className="dText">It pretends to be a window of a code editor</p>
      <p className="dText">Where every <span className="dPurple">.yml</span> file displays information in a nice way</p>
      <p className="dText">Inspired by <span className="dRed">VS CODE</span> and <span className="dRed">{"Dracula's Theme"}</span> colors</p>
      <p className="dText">Complitly done with <span className="dPurple">Reactjs</span>, full code at <span className="dRed">Github</span></p>
      <p className="dText">Click on a tab to <span className="dYellow">start</span></p>
      <p className="dText"><span className="dBlue">PDF version</span></p>
      <p className="dText">JUNE - 2020</p>
    </div>
  </div>;

export default withRouter(Homepage);
