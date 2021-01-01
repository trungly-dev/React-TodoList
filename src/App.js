import React, { useEffect, useState }  from 'react';
import queryString from 'query-string';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

function App() { 

  // create initial state for todoList
  const [todoItems, setTodoItems] = useState ([
    {id:1, title: 'Action 1'},
    {id:2, title: 'Action 2'},
    {id:3, title: 'Action 3'}
  ]);

  // handle removing when click to an item of list
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

  // Create a initial State for Post List
  const [postList, setPostList] = useState([]);


  // Create initial State for Pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });

  // Create a group of filters to add into link
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    // searchTerm: ...
    // _q : ...

  });


  // Pouring API to Post List
  useEffect( () => {

    const fetchPostList = async () => {

      try {
        const paramFilters = queryString.stringify(filters);
        const response = await fetch(`http://js-post-api.herokuapp.com/api/posts?${paramFilters}`);
        const responseJSON = await response.json();

        console.log(responseJSON);
        const { data, pagination } = responseJSON;

        setPostList(data);
        setPagination(pagination);
      }catch (error) {
        console.log("Failed to fetch post list", error.message);         
      }
    } 
    fetchPostList ();
  } , [filters] );


  // hangle control page when clicking to pre or next button
  const handlePaginationChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage
    });
  }

  return (
    <div className="App"> 
      <h1> To do List</h1>
      <TodoForm   onFormSubmit={handleTodoFormSubmit}  />
      <TodoList list={todoItems} onItemClick={handleAppClick}/>
      <h1> Post List </h1>
      <PostList posts={postList} />

      <Pagination 
        pagination={pagination}  
        onPageChange={handlePaginationChange}  
      />

    </div>

  );
 }

export default App;
