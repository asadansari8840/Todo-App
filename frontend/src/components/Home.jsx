import { useState, useContext } from "react";
import "../styles/Home.scss";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Create from "@mui/icons-material/Create";
import TodoList from "./TodoList";
import todoContext from "../context/todoContext";

const Home = () => {
  const context = useContext(todoContext);
  const { addTodo } = context;

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
  });
  const onChangeHandler = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const priority = [
    {
      value: "VImportant",
      label: "Very Important",
    },
    {
      value: "Important",
      label: "Important",
    },
  ];
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(task);
  };
  return (
    <div className="home">
      <div className="addTodo">
        <h1>Add your task !</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-input">
            <TextField
              name="title"
              onChange={onChangeHandler}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-input">
            <TextField
              name="description"
              onChange={onChangeHandler}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
            <div className="form-input">
              <TextField
                name="priority"
                onChange={onChangeHandler}
                id="outlined-select-currency"
                fullWidth
                select
                label="Priority"
                defaultValue=""
                helperText="Tell us how much impoprtant is your task ?"
              >
                {priority.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              endIcon={<Create />}
            >
              Add Task{" "}
            </Button>
          </div>
        </form>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
