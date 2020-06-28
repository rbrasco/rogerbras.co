import React from 'react';
import AsciiCanvas from '../asciiCanvas';
import { withRouter } from 'react-router-dom';
import pdf from '../../files/cv_Roger_Brasco.pdf';

const vscode = 'https://code.visualstudio.com/';
const dracula = 'https://draculatheme.com/';
const reactjs = 'https://reactjs.org/';
const github = 'https://github.com/rbrasco/rogerbras.co';

const linkTag = (key, text, style, title = '') => <a href={key} target='_blank' rel="noopener noreferrer" className={`${style} dlink`} title={title}>{text}</a>;

const Homepage = () =>
  <div className="default">
    <AsciiCanvas className="dLogo" />
    <div className="dTextWrapper">
      <p className="dText"><span className="dBlue dlink" title="My personal page">rogerbras.co</span></p>
      <p className="dText">Welcome to my original idea for a <span className="dYellow">CV page</span></p>
      <p className="dText">It pretends to be a window of a code editor</p>
      <p className="dText">Where every <span className="dPurple">.yml</span> file displays information in a nice way</p>
      <p className="dText">
        Inspired by {linkTag(vscode, 'VS CODE', 'dRed', 'Visual Studio Code')} and {linkTag(dracula, "Dracula's Theme", 'dRed', 'Dracula\'s color scheme')} colors</p>
      <p className="dText">Completely done with {linkTag(reactjs, 'Reactjs', 'dPurple', 'Reactjs')}, full code at {linkTag(github, 'Github', 'dRed', 'Repository at Github')}</p>
      <p className="dText">Click on any tab to <span className="dYellow">start</span></p>
      <p className="dText">{linkTag(pdf, 'PDF version', 'dBlue', 'Download CV')}</p>
      <p className="dText"><span className="dPink">JUNE - 2020</span></p>
    </div>
  </div>;

export default withRouter(Homepage);
