import React from "react";
import './TodoForm.css'


function TodoForm({
    setOpenModal,
    addTodo
}) {
    const [newTodoValue, setNewTodoValue] = React.useState(false);
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = (event) => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return(
        <form className="TodoForm" onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Ir al supermercado..."
                onChange={onChange}
            />
            <div className="TodoForm-buttonSection">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button-add">
                    Agregar
                </button>
            </div>


        </form>
    )
}

export {TodoForm}