import React, { useState } from 'react';

const HabitInput = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [plantType, setPlantType] = useState('flower');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName) {
      onAddHabit({ name: habitName, type: plantType, progress: 0 });
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Habit name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className="p-2 border rounded text-black"
      />
      <select
        value={plantType}
        onChange={(e) => setPlantType(e.target.value)}
        className="p-2 border rounded text-black"
      >
        <option value="flower">Flower</option>
        <option value="tree">Tree</option>
      </select>
      <button
        type="submit"
        className="bg-white text-gardenGreen px-4 py-2 rounded"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitInput;
