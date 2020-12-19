export default function todo(props) {
  const toggleTodoFunction = () => {
    props.someDispatch({ type: "TOGGLE_TODO", payload: props.something.id});
  };
  return <li className={props.something.completed ? 'somethingToggled' : ''} onClick={toggleTodoFunction} >{props.something.item}</li>;
}
