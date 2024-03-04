import {TodoCounter} from '../components/TodoCounter'
import { TodoItem } from '../components/TodoItem'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodosLoading } from '../components/TodosLoading'
import { TodosError } from '../components/TodosError'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoForm } from '../components/TodoForm';
import { TodoContext } from '../context/TodoContext'
import React from 'react'
import { Modal } from '../components/Modal'

function AppUI() {
    const {
        completeTodo,
        deleteTodo,
        todosResults,
        loading,
        error,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter />
                <div className='todosSection'>
                    <TodoSearch/>
                    <TodoList>
                        {loading && 
                            <>
                                <TodosLoading/>
                                <TodosLoading/>
                                <TodosLoading/>
                            </>

                        }
                        {error && <TodosError/>}
                        {!loading && !error && todosResults.length === 0 && <p>Crea tu primer todo!</p>}
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
            </div>
            <CreateTodoButton/>

            { openModal && 
                <Modal>
                    <TodoForm/>
                </Modal>
            }
        </>
    )
}

export {AppUI}