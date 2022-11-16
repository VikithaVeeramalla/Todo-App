import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import { TiEdit } from "react-icons/ti";

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, editTodo } = props;

  return (
    <div className={todo.completed ? "todo-row complete " : "todo-row"}>
      {todo.text}
      <div className="iconsContainer">
        <RiCloseCircleLine
          style={{ marginRight: "5px" }}
          onClick={() => removeTodo(todo.id)}
        />
        <BiCheckCircle onClick={() => completeTodo(todo.id)} />
        <TiEdit className="edit" onClick={() => editTodo(todo)} />
      </div>
    </div>
  );
}
