import React, { useState, useEffect, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { ThemeContext } from '../context/ThemeContext';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const { theme } = useContext(ThemeContext);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
  );

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
      <div className="flex mb-4 gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} className="border px-2 py-1 flex-grow" />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-1 rounded">Add</button>
      </div>
      <div className="mb-4 space-x-2">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center border p-2 rounded">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div className="space-x-2">
              <button onClick={() => toggleTask(task.id)} className="text-green-600">✓</button>
              <button onClick={() => deleteTask(task.id)} className="text-red-600">✕</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
