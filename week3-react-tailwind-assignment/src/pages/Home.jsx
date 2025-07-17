import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">React + Tailwind Assignment</h1>
      <Link to="/tasks" className="text-blue-600 underline">Go to Task Manager</Link>
      <br />
      <Link to="/posts" className="text-blue-600 underline">Go to Post List</Link>
    </div>
  );
};

export default Home;
