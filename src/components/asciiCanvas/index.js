import React from 'react';
import Sketch from 'react-p5';
import blockAscii from '../../images/block_ascii';
import { isMobile } from 'react-device-detect';

const AsciiCanvas = () => {
 console.log(isMobile);
  const height = isMobile ? 300 : 100;
  const width = isMobile ? 300 : 150;
  const fSize = isMobile ? 40 : 15;
  let j = 0;
  const timeToWait = 1000;
  let initialTime = 0;
  const BG = '#2c2e3b';
  const FG = '#f1fa8c';
  const loop = Array(blockAscii.length * 2).fill(0)
    .map((el, i) => i > blockAscii.length - 1 ? blockAscii.length * 2 - i - 1 : i);

  loop.splice(blockAscii.length, 1);

  const show = (p5) => {

    for (let i = 0; i < blockAscii[j % 4].length; i++) {

      p5.text(blockAscii[loop[j % loop.length]][i],
        width / 2 - fSize * 3.4, height / 2 - fSize * 4 + fSize * (i + 1));

    }

  };

  const update = (p5) => {

    if (p5.millis() - initialTime > timeToWait) {

      j++;
      initialTime = p5.millis();

    }

  };

  const setup = (p5, canvasParentRef) => {

    p5.createCanvas(width, height).parent(canvasParentRef);

  };

  const draw = p5 => {

    update(p5);
    p5.background(BG);
    p5.fill(FG);
    p5.textSize(fSize);
    p5.textFont('monospace');
    show(p5);

  };

  return (<Sketch setup={setup} draw={draw} className='asciiCanvas'/>);

};

export default AsciiCanvas;
