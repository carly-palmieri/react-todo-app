import React from 'react';
import './TodoCounter.css'

function TodoCounter({completedTodos, 
  totalTodos}) {

  let content;
  if(totalTodos !== completedTodos) {
    content = <h1>
      Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
    </h1>
  } else if (totalTodos === 0) {
    content = <h1>
    Aún no agregaste Todos
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
