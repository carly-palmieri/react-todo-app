import React from "react";
import './TodoForm.css'
import { useNavigate } from "react-router-dom";


function TodoForm({
    submitEvent, title, buttonLabel, defaultText
}) {
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = React.useState(defaultText || '');
    const onSubmit = (event) => {
        event.preventDefault();
        submitEvent(newTodoValue);
        navigate('/');
    }
    const onCancel = () => {
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
                value={newTodoValue}
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