import React from "react";
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
    const {
      items: todos, 
      saveItem: setTodos, 
      loading, 
      error,
      sincronizeItems
    } = useLocalStorage('TODOS_V2', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const todosResults = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    });

    const completeTodo = (id) => {
      let newTodos = [...todos];
      let todoIndex = newTodos.findIndex(
        todo => todo.id === id
      );
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      setTodos(newTodos)
    }
    const editTodo = (id, newText) => {
      let newTodos = [...todos];
      let todoIndex = newTodos.findIndex(
        todo => todo.id === id
      );
      newTodos[todoIndex].text = newText;
      setTodos(newTodos)
    }
    const deleteTodo = (id) => {
      let newTodos = [...todos];
      let todoIndex = newTodos.findIndex(
        todo => todo.id === id
      );
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos)
    }
    const addTodo = (text) => {
      const id = createTodoId(todos);
      let newTodos = [...todos];
      let todoIndex = newTodos.findIndex(
        todo => todo.text === text
      );
      if(todoIndex < 0 && text.length > 0) {
        newTodos.push({
          text,
          completed: false,
          id
        })
      }
      setTodos(newTodos);
    }
    const getTodoById = (id) => {
      let todo = todos.find(
        todo => todo.id === id
      );
      return todo;
    }

    return({
      completedTodos, 
      totalTodos,
      todosResults,
      searchValue,
      loading,
      error,
      setSearchValue, 
      completeTodo, 
      deleteTodo,
      addTodo,
      sincronizeItems,
      editTodo,
      getTodoById
    })
}

function createTodoId(todos) {
  if(!todos.length) return 1;
  const idList = todos.map(todo => todo.id);
  let maxId = Math.max(...idList);
  return maxId + 1;
}

export {useTodos}