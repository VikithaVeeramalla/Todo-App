import React, { useEffect, useState } from "react";

export default function Todoform(props) {
  console.log(props.deletedTodo);

  if (props.deletedTodo && props.deletedTodo !== null) {
    props.input.current.value = props.deletedTodo.text;
  } else {
    props.input.current.value = "";
  }

  const helper = (e) => {
    e.preventDefault();

    let temp = [];
    props.todos.forEach((el) => {
      if (el.id === props.deletedTodo.id) {
        temp.push({ ...props.deletedTodo, text: props.input.current.value });
      } else {
        temp.push(el);
      }
    });
    props.setTodos(temp);
    props.setEdited(props.edited + 1);
    // console.log(props.input.current, "hahahaha");
    props.input.current.value = "";
  };
  const handleSubmit = (e) => {
    // console.log(input.current.value);

    e.preventDefault();
    props.addTodo(props.input.current.value);
    props.input.current.value = "";
    // props.deletedTodo.text = "";
  };

  return (
    <div>
      <form
        onSubmit={props.deletedTodo ? helper : handleSubmit}
        className="todo-form"
      >
        <input
          ref={props.input}
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="ADD a todo"
        />
        <button type="submit" className="todo-button">
          {props.deletedTodo !== null ? "Save todo" : "Add todo"}
        </button>
      </form>
    </div>
  );
}
