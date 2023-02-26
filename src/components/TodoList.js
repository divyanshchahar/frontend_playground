import Todo from "./Todo";

import { addTodo } from "../features/todos";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useState } from "react";

function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.value);

  const [todoName, setTodoName] = useState();

  return (
    <div>
      {todos.map((item) => {
        return <Todo todo={item} />;
      })}
      <input
        type="text"
        value={todoName}
        onChange={(e) => {
          setTodoName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && todoName) {
            dispatch(addTodo({ name: todoName }));
            setTodoName("");
          }
        }}
      />
    </div>
  );
}

export default TodoList;
