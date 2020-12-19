import './App.css';
//components
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
//library imports
import { useReducer } from 'react';
//reducer
import { todoReducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const clearTodo = () => {
    dispatch({type:'FINISHED_TODO'})
  }

  return (
    <div className="App-header">
      <TodoForm dispatch={dispatch}/>
      <TodoList dispatch={dispatch} state={state}/>
      <button onClick={clearTodo}>Clear Todo</button>
    </div>
  );
}

export default App;
