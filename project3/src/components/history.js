import React from 'react';

const HistoryModal = ({ habit, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded">
        <h2 className="text-lg font-bold mb-4">{habit.name} History</h2>
        <p>Progress logs will go here...</p>
        <button
          onClick={onClose}
          className="mt-4 bg-gardenGreen text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HistoryModal;