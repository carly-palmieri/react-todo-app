import React from 'react';
import { TodoContext } from '../../context/TodoContext';
import './CreateTodoButton.css'
import { FaPlus } from "react-icons/fa";

function CreateTodoButton() {
    const {openModal, setOpenModal} = React.useContext(TodoContext)
    return(
        <button className="CreateTodoButton" onClick={(event) => {
            setOpenModal(!openModal);
        }}>
            <FaPlus className={`Icon Icon-Plus ${openModal ? 'Icon-Plus--open' : ''}`}/>
        </button>
    );
}

export {CreateTodoButton};