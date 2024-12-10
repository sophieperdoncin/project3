import './App.css';
import React, {useState} from 'react';
import HabitInput from './components/habitInput.js';
import Garden from './components/garden.js';


const App = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, { ...habit, progress: 0 }]); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 flex flex-col items-center justify-center text-white">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center mb-8 drop-shadow-lg">
        🌱 Welcome to Habit Garden 🌱
      </h1>

      {/* Habit Tracker Section */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-green-800">
        <h2 className="text-2xl font-bold text-center mb-4">
          Track Your Habits
        </h2>
        <HabitInput onAddHabit={addHabit} />
        <Garden habits={habits} />
      </div>
    </div>
  );
};


export default App;