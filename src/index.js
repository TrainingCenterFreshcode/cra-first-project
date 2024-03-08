import React from 'react';
import ReactDOM from 'react-dom/client';
import AlohaDashboard from './components/AlohaDashboard/AlohaDashboard';
import TodoList from './components/TodoList/TodoList';
import Scene from './components/Scene/Scene';
import Counter from './components/Counter/Counter';
import CounterPage from './components/Counter/CounterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterPage />
);
