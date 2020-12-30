import React, { useState }  from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() { 

  const [todoItems, setTodoItems] = useState ([
    {id:1, title: 'Action 1'},
    {id:2, title: 'Action 2'},
    {id:3, title: 'Action 3'}
  ]);

  return (
    <div className="App"> 
    <h1> To do List</h1>
      <TodoList list={todoItems} />
    </div>

  );
 }

export default App;
