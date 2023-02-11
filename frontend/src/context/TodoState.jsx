import TodoContext from "./todoContext";
import { useState } from "react";
import axios from "axios";

const TodoState = (props) => {
  const todoInitial = [];
  const [todos, setTodos] = useState(todoInitial);

  //get all todos
  const getAllTodos = async () => {
    try {
      const { data } = await axios.get("/api/mytodos");
      setTodos(data.Todos);
    } catch (error) {
      console.log(error);
    }
  };

  //Add a todo
  const addTodo = async (todoData) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post("api/createtodo", todoData, config);
      setTodos(todos.concat(data.todo));
    } catch (error) {
      console.log(error);
    }
  };

  //DFelete a todo
  const deleteTodo = async (id) => {
    try {
      const { data } = await axios.delete(`/api/deletetodo/${id}`);
      const newTodo = todos.filter((todo) => todo._id !== id);
      setTodos(newTodo);
    } catch (error) {
      console.log(error);
    }
  };
  //Fuunctions for updating a todo
  const updateTodo = async (todoData, id) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.put(
        `/api/updatetodo/${id}`,
        todoData,
        config
      );
      const todo = data.todo;
      let newTodo = JSON.parse(JSON.stringify(todos))
      for (let index = 0; index < newTodo.length; index++) {
        const element = newTodo[index];
        if (element._id === id) {
          newTodo[index].title = todo.title;
          newTodo[index].description = todo.description;
          newTodo[index].priority = todo.priority; 
          break; 
        }
      }  
      setTodos(newTodo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TodoContext.Provider
      value={{ todos, getAllTodos, addTodo, deleteTodo, updateTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
