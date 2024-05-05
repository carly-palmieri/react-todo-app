import React from 'react';
import {TodoForm} from '../../components/TodoForm'
import './CreateTodoPage.css'
import { useTodos } from '../useTodos';

function CreateTodoPage() {
  const {addTodo} = useTodos();
  return (
    <div className='CreateTodoPage' > 
        <TodoForm 
          submitEvent={(e) => {addTodo(e)}} 
          title="Escribe tu nuevo TODO"
          buttonLabel="Aceptar"
        ></TodoForm>
    </div>
  )
}

export default CreateTodoPage;