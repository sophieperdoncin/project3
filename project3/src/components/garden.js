import React from 'react';
import Plant from './plant';

const Garden = ({ habits }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {habits.map((habit, index) => (
        <Plant key={index} habit={habit} />
      ))}
    </div>
  );
};

export default Garden;
