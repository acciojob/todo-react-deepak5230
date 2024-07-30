
import React from "react";
import './../styles/App.css';
import {useState} from 'react'

/*const App = () => {

  const [inputValue, setInputValue] =useState('')
  const[todos,setTodos]= useState('')

  const Value= (e)=>{
    setInputValue(e.target.value)
}

const handleAddTodo= ()=>{
  if (inputValue.trim()){
setTodos([...todos,inputValue]);
setInputValue('');
  }
}
const handleDeleteTodo = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};
  return (
    <div>
    <div>
      <h1>To-do-list</h1>
        <input type="text" onChange={Value}></input>
        <button onClick={handleAddTodo}>Add todo</button>
    </div>
<ul>
  {
    todos.map((todo,index)=>{

      <li key={index}>
        {todo}
        <button onClick={() => handleDeleteTodo(index)}>Delete</button>

      </li>
    })
  }
</ul>
    
  </div>
  );
}

export default App*/



//import React, { useState } from 'react';
//import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

