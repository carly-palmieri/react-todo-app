import React from 'react';
import './CreateTodoButton.css'
import { FaPlus } from "react-icons/fa";

function CreateTodoButton({openModal, setOpenModal}) {
    return(
        <button className="CreateTodoButton" onClick={(event) => {
            setOpenModal(!openModal);
        }}>
            <FaPlus className={`Icon Icon-Plus ${openModal ? 'Icon-Plus--open' : ''}`}/>
        </button>
    );
}

export {CreateTodoButton};