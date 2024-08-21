import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';
import { formatCurrentDate } from './utils/dateUtils.jsx'

function App() {

  const { 
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo 
  } = useTodo();

  return (
    <>
    <div className='card-to-do'>
      <h1>{formatCurrentDate()}</h1>
      <div className='counter-todos'>
      <h3><span>{todosCount}</span> Tasks</h3>
      <h3><span>{pendingTodosCount}</span>  To Do</h3>
    </div>

    <div className='add-todo'>
      <TodoAdd handleNewTodo={handleNewTodo}/>
    </div>

    <TodoList
      todos={todos}
      handleUpdateTodo={handleUpdateTodo}
      handleDeleteTodo={handleDeleteTodo}
      handleCompleteTodo={handleCompleteTodo}
    />
    </div>
    </>
  );
}

export default App;