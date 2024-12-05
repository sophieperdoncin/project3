import logo from './logo.svg';
import './App.css';
import Plant from './PlantGrowth.js';
import React, {useState} from 'react';
import HabitInput from './components/habitInput.js';
import Garden from './components/garden.js';


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
//       <Plant stage="day1" />
//       <Plant stage="day2" />
//       <Plant stage="day3" />
//       <Plant stage="day4" />
//       <Plant stage="day5" />
//       <Plant stage="day6" />
//       <Plant stage="day7" />
//     </div>
//   );
// }

const App = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Habit Garden</h1>
      <HabitInput onAddHabit={addHabit} />
      <Garden habits={habits} />
    </div>
  );
};


export default App;
