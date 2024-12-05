import React, { useState } from 'react';
import Plant from './plant';

const Garden = ({ habits }) => {
    const [gardenHistory, setGardenHistory] = useState([]);
  
    // Define the addToGarden function
    const addToGarden = (habit) => {
      setGardenHistory([...gardenHistory, habit]); // Add the habit to the garden history
    };
  
    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {habits.map((habit, index) => (
            <Plant key={index} habit={habit} addToGarden={addToGarden} />
          ))}
        </div>
  
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Grown Plants</h3>
          <div className="flex flex-wrap gap-4">
            {gardenHistory.map((habit, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 p-4 rounded shadow-md"
              >
                <h4 className="text-lg font-bold">{habit.name}</h4>
                <p>🌱 Fully Grown!</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Garden;