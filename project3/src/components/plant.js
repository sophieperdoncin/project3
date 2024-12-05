import React, { useState } from 'react';
import stage1 from '../images/stage1.png';
import stage2 from '../images/stage2.png';
import stage3 from '../images/stage3.png';
import stage4 from '../images/stage4.png';
import stage5 from '../images/stage5.png';
import stage6 from '../images/stage6.png';

const Plant = ({ habit, addToGarden }) => {
  // Array of plant growth stage images
  const plantStages = [
    stage1,
    stage2,
    stage3,
    stage4,
    stage5,
    stage6,
  ];

  const [progress, setProgress] = useState(habit.progress);

  const logProgress = () => {
    if (progress < 6) {
      setProgress(progress + 1);
    } else {
      // Call addToGarden when the plant is fully grown
      addToGarden(habit);
      setProgress(0); // Reset progress
    }
  };

  return (
    <div className="flex flex-col items-center bg-white text-black p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">{habit.name}</h2>
      <img
        src={plantStages[progress]}
        alt={`Plant growth stage ${progress + 1}`}
        className="w-32 h-32"
      />
      <button
        onClick={logProgress}
        className="mt-4 bg-gardenGreen text-white px-4 py-2 rounded"
      >
        Log Progress
      </button>
    </div>
  );
};

export default Plant;