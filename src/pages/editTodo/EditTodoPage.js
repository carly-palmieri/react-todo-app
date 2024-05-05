import React from 'react';
import { TodoForm } from '../../components/TodoForm';
import './EditTodoPage.css';
function EditTodoPage() {
  const id = 0;
  return (
    <div className='EditTodoPage' > 
        <TodoForm 
          submitEvent={(e) => {}} 
          title="Edita tu TODO"
          buttonLabel="Guardar"
        ></TodoForm>
    </div>
  )
}

export default EditTodoPage;