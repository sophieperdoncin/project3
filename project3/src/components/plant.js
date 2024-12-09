import React, { useState } from 'react';
import stage1flower from '../images/flowers/stage1.png';
import stage2flower from '../images/flowers/stage2.png';
import stage3flower from '../images/flowers/stage3.png';
import stage4flower from '../images/flowers/stage4.png';
import stage5flower from '../images/flowers/stage5.png';
import stage6flower from '../images/flowers/stage6.png';
import stage7flower from '../images/flowers/stage7.png';

import stage1tree from '../images/trees/stage1.png';
import stage2tree from '../images/trees/stage2.png';
import stage3tree from '../images/trees/stage3.png';
import stage4tree from '../images/trees/stage4.png';
import stage5tree from '../images/trees/stage5.png';
import stage6tree from '../images/trees/stage6.png';
import stage7tree from '../images/trees/stage7.png';

const Plant = ({ habit, addToGarden }) => {
  // Array of plant growth stage images
  const flowerStages = [
    stage1flower,
    stage2flower,
    stage3flower,
    stage4flower,
    stage5flower,
    stage6flower,
    stage7flower,
  ];

  const treeStages = [
    stage1tree,
    stage2tree,
    stage3tree,
    stage4tree,
    stage5tree,
    stage6tree,
    stage7tree,
  ];

  const [progress, setProgress] = useState(habit.progress || 0);
  const [plantType, setPlantType] = useState('flower'); // Default to flower

  // Determine the image set to use based on plant type
  const plantStages = plantType === 'tree' ? treeStages : flowerStages;

  const logProgress = () => {
    if (progress < plantStages.length) {
      setProgress(progress + 1);
    } else {
      console.log('Plant fully grown, adding to garden:', habit);
      if (addToGarden) {
        const fullPlant = {
          ...habit,
          image: plantStages[plantStages.length - 1], // <-- Add the final stage image
      };
        // addToGarden(habit);
        addToGarden(fullPlant);
        setProgress(0); // Reset progress
      } else {
        console.error('addToGarden is not a function!');
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded shadow">
      <h2 className="font-bold">{habit.name}</h2>

      {/* Dropdown for selecting plant type */}
      <select
        value={plantType}
        onChange={(e) => setPlantType(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="flower">Flower</option>
        <option value="tree">Tree</option>
      </select>

      {/* Conditionally render the growth stage image */}
      {progress > 0 && (
        <img
          src={plantStages[progress - 1]}
          alt={`Growth stage ${progress}`}
          className="w-32 h-32"
        />
      )}

      <button
        onClick={logProgress}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Log Progress
      </button>
    </div>
  );
};

export default Plant;