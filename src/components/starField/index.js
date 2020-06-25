import React from 'react';
import Sketch from 'react-p5';

const rI = (min, max)=> Math.floor(Math.random() * (max - min + 1) + min);
const random = (width, height) => ({ 'x': rI(-width, width), 'y': rI(-height, height), 'z': rI(0, width) });

const StarField = () => {

  let height = window.innerHeight;
  let width = document.body.clientWidth;
  const speed = 0.05;
  const BG = '#090b14';
  const n = 2000;
  const stars = Array.from({length: n}, () => random(width, height));

  const show = (p5, i) => {

    p5.fill(255);
    p5.noStroke();
    const sx = p5.map(stars[i].x / stars[i].z, 0, 1, 0, width);
    const sy = p5.map(stars[i].y / stars[i].z, 0, 1, 0, width);
    const r = p5.map(stars[i].z, 0, width, width*0.006, 0);

    p5.ellipse(sx, sy, r, r);

  };

  const update = (p5, i) => {

    stars[i].z -= speed;
    if (stars[i].z < 1) {

      stars[i] = random(width, height);

    }

  };

  const setup = (p5, canvasParentRef) => {

    p5.createCanvas(width, height).parent(canvasParentRef);

  };

  const draw = p5 => {

    width = document.body.clientWidth;
    height = document.body.clientHeight;
    p5.resizeCanvas(width, height, true);
    p5.background(BG);
    p5.translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; i++) {

      update(p5, i);
      show(p5, i);

    }

  };

  return (<Sketch setup={setup} draw={draw}/>);

};

export default StarField;
