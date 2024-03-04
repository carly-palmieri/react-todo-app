import React from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoCounter.css'

function TodoCounter() {
  const {completedTodos, 
    totalTodos} = React.useContext(TodoContext)
  let content;
  if(totalTodos !== completedTodos) {
    content = <h1>
      Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
    </h1>
  } else {
    content = <h1>
    Completaste todos los Todos!!
    </h1>
  }
    return(
      <>
        {content}
      </>
    );
}

export {TodoCounter};
