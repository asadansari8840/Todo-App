import React, { useContext, useEffect, useState } from "react";
import todoContext from "../context/todoContext";
import TodoCard from "./TodoCard";
const TodoList = () => {
  const context = useContext(todoContext);
  const { getAllTodos, todos } = context;
  useEffect(() => {
    getAllTodos();
    // eslint-disable-next-line
  }, []);
  // console.log(todos[0].title)
  return (
    <div className="todosDiv">
      <h3>My todos</h3>
      {todos && todos.map((todo, i) => <TodoCard todo={todo} key={i} />)}
    </div>
  );
};

export default TodoList;


