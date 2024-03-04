import './TodoItem.css'
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function TodoItem({text, completed, completeTodo, deleteTodo}) {
    return(
      <li className='TodoItem'>
        <span 
          onClick={() => {
            completeTodo(text)
          }}
        >
          <FaCheck className={`Icon Icon-Check ${completed ? 'Icon-Check--completed' : ''}`}/>
        </span>
        <p 
          className={`TodoItem-p ${completed ? 'TodoItem-p--completed' : ''}`}
        >{text}</p>
        <span 
          onClick={() => deleteTodo(text)}
        >
          <FaTimes className='Icon Icon-Delete'/>
        </span>
      </li>
    );
}

export {TodoItem};