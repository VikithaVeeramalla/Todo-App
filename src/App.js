import React, { useState, useEffect } from "react";
import "./styles.css";

// import TodoForm from "./components/TodoForm";
// import TodoItem from '/sandbox/components/TodoItem'
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

const getLocalItems = () => {
  let list1 = localStorage.getItem("lists");
  if (list1) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState(getLocalItems());

  const addTodo = (text) => {
    console.log(text);

    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const [update, setUpdatedText] = useState();
  const input = React.useRef("");
  const [edited, setEdited] = useState(0);
  const editTodo = (todo) => {
    console.log(todo);
    setUpdatedText(todo);
  };
  React.useEffect(() => {
    setUpdatedText(null);
  }, [edited]);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <TodoForm
        edited={edited}
        setEdited={setEdited}
        input={input}
        todos={todos}
        setTodos={setTodos}
        deletedTodo={update}
        addTodo={addTodo}
      />
      <hr className="separator " />
      {todos.map((todo) => {
        return (
          <TodoItem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
      {/* <TodoCount /> */}
    </div>
  );
}
export default App;
