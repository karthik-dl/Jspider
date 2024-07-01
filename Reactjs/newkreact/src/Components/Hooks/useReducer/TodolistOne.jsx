import { useState, useReducer } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    todo: "create useReducer example",
    done: false
  }
];

const todoReducer = (state = initialState, action = {}) => {
  // Main reducer
  switch (action.type) {
    case "[TODO] add todo":
      return [...state, action.payload];

    case "[TODO] remove todo":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return initialState;
  }
};

 function TodoListOne(){
  const [inputValue, setInputValue] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleAddAction = (newTodo) => {
    // Sets the add action & payload to dispatch
    const action = {
      type: "[TODO] add todo",
      payload: newTodo
    };
    dispatch(action);
  };

  const handleDeleteAction = (id) => {  
    // Sets the delete action & payload to dispatch
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id
    });
  };

  const addNewTodo = () => {
    // creates the new TODO item and calls the action to dispatch it
    const newTodo = {
      id: new Date().getTime(),
      todo: inputValue,
      done: false
    };

    handleAddAction(newTodo); // Sends item to add action
    setInputValue(""); // Resets form input
  };

  return (
    <div className="App">
      <h1>TODO List with reducer</h1>
      <input
        type="text"
        placeholder="new todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={addNewTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <span onClick={() => handleDeleteAction(todo.id)}> [X]</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoListOne