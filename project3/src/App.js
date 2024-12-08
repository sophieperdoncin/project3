import logo from './logo.svg';
import './App.css';
import Flower from './FlowerGrowth.js';
import React, {useState} from 'react';
import HabitInput from './components/habitInput.js';
import Garden from './components/garden.js';
import Tree from './TreeGrowth.js';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>
//           HabitGarden!
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold text-green-600">
//         Welcome to Habit Garden 🌱
//       </h1>
//       <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//         Add New Habit
//       </button>
//       <Tree stage="day1" />
//       <Tree stage="day2" />
//       <Tree stage="day3" />
//       <Tree stage="danpx y4" />
//       <Tree stage="day5" />
//       <Tree stage="day6" />
//       <Tree stage="day7" />
//     </div>
//   );
// }

const App = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, { ...habit, progress: 0 }]); // Initialize habit with progress = 0
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