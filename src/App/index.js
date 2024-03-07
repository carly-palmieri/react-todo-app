import React from 'react';
import {TodoCounter} from '../components/TodoCounter'
import { TodoItem } from '../components/TodoItem'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodosLoading } from '../components/TodosLoading'
import { TodosError } from '../components/TodosError'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoForm } from '../components/TodoForm';
import { Modal } from '../components/Modal'
import { TodoEmptyState } from '../components/TodoEmptyState'
import { TodoHeader } from '../components/TodoHeader'
import { useTodos } from './useTodos';

function App() {
  const {
    completedTodos, 
    totalTodos,
    todosResults,
    searchValue,
    setSearchValue, 
    completeTodo, 
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    addTodo
  } = useTodos()
  return (
    <>  
        <TodoHeader>
            <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </TodoHeader>
        <TodoList>
            {loading && 
                <>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </>

            }
            {error && <TodosError/>}
            {!loading && 
            !error && 
            todosResults.length === 0 && 
            <TodoEmptyState message={
                totalTodos === 0 ? 
                'Crea tu primer TODO' :
                'No se encontraron coincidencias'
            }/>
            }
            {todosResults.map(todo => (
                <TodoItem 
                text={todo.text} 
                completed={todo.completed} 
                key={todo.text}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                />
            ))}
        </TodoList>
        <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
        { openModal && 
            <Modal>
                <TodoForm 
                  setOpenModal={setOpenModal}
                  addTodo={addTodo}/>
            </Modal>
        }
    </>
)
}

export default App;
