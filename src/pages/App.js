import React from 'react';
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home/HomePage';
import CreateTodoPage from './createTodo/CreateTodoPage';
import EditTodoPage from './editTodo/EditTodoPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/new' element={<CreateTodoPage/>}></Route>
        <Route path='/edit/:id' element={<EditTodoPage/>}></Route>
        <Route path='*' element={<p>Page not found</p>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App;
