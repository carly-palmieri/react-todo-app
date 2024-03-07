import React from "react";
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
    const {
        items: todos, 
        saveItem: setTodos, 
        loading, 
        error
      } = useLocalStorage('TODOS', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      const todosResults = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)
      });
      const completeTodo = (text) => {
        let newTodos = [...todos];
        let todoIndex = newTodos.findIndex(
          todo => todo.text === text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos)
      }
      const deleteTodo = (text) => {
        let newTodos = [...todos];
        let todoIndex = newTodos.findIndex(
          todo => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos)
      }
      const addTodo = (text) => {
        let newTodos = [...todos];
        let todoIndex = newTodos.findIndex(
          todo => todo.text === text
        );
        if(todoIndex < 0 && text.length > 0) {
          newTodos.push({
            text,
            completed: false
          })
        }
        setTodos(newTodos);
      }
    return({
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
    })
}

export {useTodos}