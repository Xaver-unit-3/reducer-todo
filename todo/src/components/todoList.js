import Todo from './todo';

export default function TodoList(props) {
  return (
    <div>
      <ul>{props.state.map((something) => {
        return <Todo key={something.id} something={something} someDispatch={props.dispatch}/>
      })}</ul>
    </div>
  )
}
