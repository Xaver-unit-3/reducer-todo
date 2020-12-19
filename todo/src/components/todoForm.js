
import React, { useState } from "react";

export default function TodoForm(props) {

  const [newTodo, setNewTodo] = useState('');

  const handleChanges = (e) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.dispatch({type:'ADD_TODO', payload:newTodo})
    setNewTodo('')
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        className="todo-input"
        type="text"
        name="newTodo"
        value={newTodo}
        onChange={handleChanges}
        ></input>
        <button>Add Todo</button>
      </form>
    </div>
  )
}
