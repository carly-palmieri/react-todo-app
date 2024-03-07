import './TodoEmptyState.css';
import emptyState from './emptyState.svg';

function TodoEmptyState({message}) {
    return(
      <div className='TodoEmptyState'>
        <h2>{message}</h2>
        <img alt="empty state" src={emptyState}></img>
      </div>
    );
}

export {TodoEmptyState};