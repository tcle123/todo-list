import React from "react";
import { useState } from "react";

import Form from './components/Form'
import TodoItem from './components/TodoItem'

function App() {
  // starts as false because the list starts unfiltered
  const[filterState, updateFilter] = useState(false)

  const [todo, setTodo] = useState([
    {
      title: 'Create to-do list',
      description: 'make a to do list in react',
      id: 1,
      stillTodo: true
    },
  
    {
      title: 'Make a sandwich',
      description: 'make a sandwich to eat',
      id: 2,
      stillTodo: false
    }
  
  ]);
  

// updates filter to see whether or not the button to filter has been pressed
function handleClick() {
  // occurs if the button has been pressed when the filter is currently off
  if(filterState === false) {
      updateFilter(true)
  }
  else {
      updateFilter(false)
  }
}


  const handleAdd = (title, description) => {
      let newItem = {
        title: title,
        description: description,
        id: todo.length + 1,
        stillTodo: true
      }
      setTodo([...todo, newItem])
  }

 const handleTodo = (id) => {
   todo.find((item) => { return item.id === id})
 }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <button onClick={handleClick}>Filter?</button>
      {todo.filter((item) => { 
        // occurs if the user turned the filter on
        if(filterState === true) {
          // will show everything that is finished
          return item.stillTodo === false
        }
        else {
          // shows everything
          return true;
        }
      })
      .map(t => <TodoItem {...t} />)}
      <Form handleSubmit={handleAdd} />
    </div>
  );
}

export default App;
