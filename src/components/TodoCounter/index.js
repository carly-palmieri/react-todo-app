import React from 'react';
import './TodoCounter.css'

function TodoCounter({completedTodos, 
  totalTodos, loading}) {

  let content;
  if(totalTodos !== completedTodos) {
    content = <>
      Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
    </>
  } else if (totalTodos === 0) {
    content = <>
    Aún no agregaste Todos
    </>
  } else {
    content = <>
    Completaste todos los Todos!!
    </>
  }
    return(
      <h1 className={loading ? 'disabled' : ''}>
        {content}
      </h1>
    );
}

export {TodoCounter};
