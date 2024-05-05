import React from "react";
import './TodoForm.css'
import { useNavigate } from "react-router-dom";


function TodoForm({
    submitEvent, title, buttonLabel
}) {
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = React.useState(false);
    const onSubmit = (event) => {
        event.preventDefault();
        submitEvent(newTodoValue);
        navigate('/');
    }
    const onCancel = (event) => {
        navigate('/');
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return(
        <form className="TodoForm" onSubmit={onSubmit}>
            <label>{title}</label>
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
                    {buttonLabel}
                </button>
            </div>


        </form>
    )
}

export {TodoForm}