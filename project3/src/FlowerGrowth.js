import React from 'react';

import stage1 from './images/flowers/stage1.png'
import stage2 from './images/flowers/stage2.png'
import stage3 from './images/flowers/stage3.png'
import stage4 from './images/flowers/stage4.png'
import stage5 from './images/flowers/stage5.png'
import stage6 from './images/flowers/stage6.png'


const Flower = ({ stage }) => {
  const stages = {
    day1: stage1,
    day2: stage2,
    day3: stage3,
    day4: stage4,
    day5: stage5,
    day6: stage6,
    day7: stage6,
  };

  const sizeClass = stage === "day7" ? "h-24 w-24" : "h-12 w-12"; 

  return (
    <div className="flex flex-col items-center">
      <img
        src={stages[stage]} 
        alt={`Plant stage ${stage}`} 
        className={`object-contain ${sizeClass}`} 
      />
      <p className="text-gray-500 mt-2 capitalize">{stage}</p>
    </div>
  );
};

export default Flower;
