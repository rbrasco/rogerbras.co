import React from 'react';
const stars = [0, 1, 2, 3, 4, 5];

const Starfield = () => stars.map((x, i) => <div id="star" key={i}></div>);

export default Starfield;
