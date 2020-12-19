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

  return (
    <div className="App-header">
      <TodoForm dispatch={dispatch}/>
      <TodoList dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;
