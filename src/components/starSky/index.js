import React from 'react';
import Sketch from 'react-p5';

const width = 500;
const height = 500;

function rI(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const random = () => ({"x": rI(0, width), "y": rI(0, height), "z": rI(0, width)});

const StarSky = () => {
    const initialValue = {"x": 0, "y": 0, "z": 0};
    let stars = {};
    const n = 100;
    const range = Array(n).fill();
    range.forEach((_, i) => stars = {...stars, [`${i}`]: random()});
    for(let i=0; i<range.length; i++)
        console.log(stars,i)

    let x = 50;
    let y = 50;
    let z = 50;

    const show = (p5, i) => {
        p5.fill(255);
        p5.noStroke();
        p5.ellipse(stars[i].x, stars[i].y, 3, 3);
    }
    const update =(p5, i) => {

    }

    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    };
    
    const draw = p5 => {
        p5.background(0);
        for(let i=0; i<range.length; i++)
        {
            update(p5, i);
            show(p5, i);
        }
      
    };

    return (<Sketch setup={setup} draw={draw}/>);
}


export default StarSky;