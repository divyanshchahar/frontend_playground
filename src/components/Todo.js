import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../features/todos";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const [name, setName] = useState();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(toggleTodo({ _id: todo._id }));
        }}
      >
        {todo.name}
      </button>

      <button
        onClick={() => {
          dispatch(deleteTodo({ _id: todo._id }));
        }}
      >
        delete
      </button>

      {todo.completed ? <span>True</span> : <span>False</span>}

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && name) {
            dispatch(updateTodo({ _id: todo._id, name: name }));
          }
        }}
      />
    </div>
  );
}

export default Todo;
