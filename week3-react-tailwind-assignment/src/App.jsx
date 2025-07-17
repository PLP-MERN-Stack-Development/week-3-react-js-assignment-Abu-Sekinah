import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TaskManager from './components/TaskManager';
import PostList from './components/PostList';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
