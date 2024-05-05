import React from 'react';
import './CreateTodoButton.css'
import { FaPlus } from "react-icons/fa";

function CreateTodoButton({onClick}) {
    return(
        <button className="CreateTodoButton" onClick={() => {
            onClick();
        }}>
            <FaPlus className={"Icon Icon-Plus"}/>
        </button>
    );
}

export {CreateTodoButton};