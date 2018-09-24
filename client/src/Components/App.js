import React from 'react';
import TaskList from './TaskList';

const tasks = [
  { name: 'Do this' },
  { name: 'Do that' },
  { name: 'Do the other thing' }
];

const App = () => {
  return (
    <TaskList tasks={tasks} />
  );
};

export default App;
