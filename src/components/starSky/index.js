import React from 'react';
import Sketch from 'react-p5';

const width = document.body.clientWidth;
const height = window.innerHeight;

const rI = (min, max)=> Math.floor(Math.random() * (max - min + 1) + min);
const random = () => ({"x": rI(-width, width), "y": rI(-height, height), "z": rI(0, width)});

const StarSky = () => {
    const speed = 1;
    let stars = {};
    const n = 2000;
    const range = Array(n).fill();
    range.forEach((_, i) => stars = {...stars, [`${i}`]: random()});

    const show = (p5, i) => {
        p5.fill(255);
        p5.noStroke();
        const sx = p5.map(stars[i].x / stars[i].z, 0, 1, 0, width);
        const sy = p5.map(stars[i].y / stars[i].z, 0, 1, 0, width);
        const r = p5.map(stars[i].z, 0, width, 6, 0);
        p5.ellipse(sx, sy, r, r);
    }
    const update =(p5, i) => {
        stars[i].z -= speed;
        if(stars[i].z < 1)
            stars[i] = random();
    }

    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(width, height).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    };
    
    const draw = p5 => {
        p5.background(0);
        p5.translate(width/2, height/2);
        for(let i=0; i<range.length; i++)
        {
            update(p5, i);
            show(p5, i);
        }
      
    };

    return (<Sketch setup={setup} draw={draw}/>);
}

export default StarSky;