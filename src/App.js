import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import TodoList from './components/Todo-list';

function App() {
  return (
    <div>
       <NavBar />
       <TodoList />
    </div>
  );
}

export default App;
