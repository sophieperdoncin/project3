import React from 'react';

import stage1 from './images/trees/stage1.png'
import stage2 from './images/trees/stage2.png'
import stage3 from './images/trees/stage3.png'
import stage4 from './images/trees/stage4.png'
import stage5 from './images/trees/stage5.png'
import stage6 from './images/trees/stage6.png'
import stage7 from './images/trees/stage7.png'


const Tree = ({ stage }) => {
  const stages = {
    day1: stage1,
    day2: stage2,
    day3: stage3,
    day4: stage4,
    day5: stage5,
    day6: stage6,
    day7: stage7,
  };


  return (
    <div className="flex flex-col items-center">
      <img
        src={stages[stage]} 
        alt={`Plant stage ${stage}`} 
        className="h-24 w-24 object-contain"
      />
      <p className="text-gray-500 mt-2 capitalize">{stage}</p>
    </div>
  );
};

export default Tree;
