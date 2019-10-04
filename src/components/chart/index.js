import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Math', A: 100, B: 110, fullMark: 150,
  },
  {
    subject: 'Coding', A: 120, B: 130, fullMark: 150,
  },
  {
    subject: 'English', A: 80, B: 130, fullMark: 150,
  },
  {
    subject: 'Diving', A: 130, B: 100, fullMark: 150,
  },
  {
    subject: 'Cooking', A: 110, B: 100, fullMark: 150,
  },

];


const Chart = (props) => {

  return (
    <div className="chart">
      <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );

};

export default Chart;
