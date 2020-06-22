import React from 'react';
import { TodoProvider } from './components/context'
import TodoList from './components/todoList/todoList'
import './components/todo/style.scss'

function App() {
  return (
    <TodoProvider>
      <TodoList/>
    </TodoProvider>
  );
}

export default App;
