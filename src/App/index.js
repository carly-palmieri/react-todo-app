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
import './App.css'
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert';

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
    addTodo,
    sincronizeItems
  } = useTodos();
  return (
    <div className='App'>  
        <TodoHeader loading={loading}>
            <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </TodoHeader>
        <TodoList
            error={error}
            onError={() => <TodosError/>}
            loading={loading}
            onLoading={() => <TodosLoading/>}
            todosResults={todosResults}
            onEmpty={() => <TodoEmptyState message='Crea tu primer TODO'/>}
            totalTodos={totalTodos}
            searchValue={searchValue}
            onNoResults={(search) => (<TodoEmptyState message={
                'No se encontraron coincidencias para ' + search
            }/>)}
            render={(todo) => (
                <TodoItem 
                text={todo.text} 
                completed={todo.completed} 
                key={todo.text}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                />
            )}
        >
        </TodoList>
        <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
        { openModal && 
            <Modal>
                <TodoForm 
                  setOpenModal={setOpenModal}
                  addTodo={addTodo}/>
            </Modal>
        }
        <ChangeAlertWithStorageListener sincronizeItems={sincronizeItems}/>
    </div>
)
}

export default App;
