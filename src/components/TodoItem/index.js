import './TodoItem.css'
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function TodoItem({text, completed, completeTodo, deleteTodo, editTodo}) {
    return(
      <li className='TodoItem'>
        <span 
          onClick={completeTodo}
        >
          <FaCheck className={`Icon Icon-Check ${completed ? 'Icon-Check--completed' : ''}`}/>
        </span>
        <p 
          className={`TodoItem-p ${completed ? 'TodoItem-p--completed' : ''}`}
        >{text}</p>
        <span 
          onClick={editTodo}
        >
          <FaPencilAlt className='Icon Icon-Edit'/>
        </span>
        <span 
          onClick={deleteTodo}
        >
          <FaTimes className='Icon Icon-Delete'/>
        </span>
      </li>
    );
}

export {TodoItem};