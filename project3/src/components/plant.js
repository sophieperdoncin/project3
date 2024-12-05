import React, { useState } from 'react';

const Plant = ({ habit }) => {
  const [progress, setProgress] = useState(habit.progress);

  const logProgress = () => {
    setProgress((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center bg-white text-black p-4 rounded shadow-md">
      <h2 className="text-lg font-bold">{habit.name}</h2>
      {habit.type === 'flower' ? (
        <div className="text-center">
          <p>🌸 Petals: {progress}</p>
        </div>
      ) : (
        <div className="text-center">
          <p>🌱 Growth: {progress}</p>
        </div>
      )}
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
