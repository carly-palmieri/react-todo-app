import React from 'react';
import { TodoForm } from '../../components/TodoForm';
import './EditTodoPage.css';
import { useTodos } from '../useTodos';
import { useLocation, useParams } from 'react-router-dom';

function EditTodoPage() {
  const location = useLocation()
  const {editTodo, getTodoById, loading} = useTodos();
  const params = useParams();
  const id = Number(params.id);
  let todo;
  if(location.state?.todo) {
    todo = location.state.todo;
  } else if(loading) {
    return (
      <div>Cargando...</div>
    )
  } else {
    todo = getTodoById(id);
  }
  return (
    <div className='EditTodoPage' > 
        <TodoForm 
          defaultText={todo.text}
          submitEvent={(text) => {editTodo(id, text)}} 
          title="Edita tu TODO"
          buttonLabel="Guardar"
        ></TodoForm>
    </div>
  )

}

export default EditTodoPage;