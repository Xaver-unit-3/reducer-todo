export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() },
      ];
    case "TOGGLE_TODO":
      return state.map((task) => {
        if (task.id === action.payload) {
          return {...task, completed:!task.completed}
        } else {
          return task
        }
      })
    //  case "FINISHED_TODO":
    //    return [
    //      ...state,
    //      { item: , completed: true, id: }
    //    ]   
    default:
      return state;
  }
};

export const initialState = [
  {
    item: "cook",
    completed: false,
    id: 0,
  },
  {
    item: "clean",
    completed: false,
    id: 1,
  },
];
