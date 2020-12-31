import React, { useState }  from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() { 

  const [todoItems, setTodoItems] = useState ([
    {id:1, title: 'Action 1'},
    {id:2, title: 'Action 2'},
    {id:3, title: 'Action 3'}
  ]);

  const handleAppClick = (item) => {
    const index = todoItems.findIndex(x => x.id === item.id);
    if (index < 0) return;

    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);

    setTodoItems(newTodoItems);

  }

  const handleTodoFormSubmit = (formValues) => {
    
    const newList = [...todoItems, {
      id: todoItems.length + 1,
      ...formValues
    } ];
 
    setTodoItems(newList);



  }

  return (
    <div className="App"> 
    <h1> To do List</h1>
      <TodoForm   onFormSubmit={handleTodoFormSubmit}  />
      <TodoList list={todoItems} onItemClick={handleAppClick}/>
    </div>

  );
 }

export default App;
