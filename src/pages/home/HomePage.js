import React from 'react';
import {TodoCounter} from '../../components/TodoCounter'
import { TodoItem } from '../../components/TodoItem'
import { TodoSearch } from '../../components/TodoSearch'
import { TodoList } from '../../components/TodoList'
import { TodosLoading } from '../../components/TodosLoading'
import { TodosError } from '../../components/TodosError'
import { CreateTodoButton } from '../../components/CreateTodoButton';
import { TodoEmptyState } from '../../components/TodoEmptyState'
import { TodoHeader } from '../../components/TodoHeader'
import { useTodos } from '../useTodos';
import './HomePage.css'
import { ChangeAlert } from '../../components/ChangeAlert';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const {
    completedTodos, 
    totalTodos,
    todosResults,
    searchValue,
    loading,
    error,
    setSearchValue, 
    completeTodo, 
    deleteTodo,
    sincronizeItems
  } = useTodos();
  const navigate = useNavigate()
  return (
    <div className='HomePage'>  
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
                id={todo.id}
                completed={todo.completed} 
                key={todo.id}
                editTodo={() => {navigate(
                    '/edit/' + todo.id, 
                    {
                        state: {todo}
                    }
                )}}
                completeTodo={() => {completeTodo(todo.id)}}
                deleteTodo={() => {deleteTodo(todo.id)}}
                />
            )}
        >
        </TodoList>
        <CreateTodoButton onClick={() => {navigate('/new')}}/>
        <ChangeAlert sincronizeItems={sincronizeItems}/>
    </div>
)
}

export default HomePage;
