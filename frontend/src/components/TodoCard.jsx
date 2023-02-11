import "../styles/TodoCard.scss";
import { useContext, useState } from "react";
import todoContext from "../context/todoContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";
import { Button, MenuItem, Modal, TextField } from "@mui/material";
import Create from "@mui/icons-material/Create";

const TodoCard = ({ todo }) => {
  const context = useContext(todoContext);
  const { deleteTodo,updateTodo } = context;
  const deleteTodoHandler = () => {
    deleteTodo(todo._id);
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
  
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  minHeight: "40vh",
  bgcolor: "white",
  color: "black",
  border: "none",
  boxShadow: 24,
  p: 4,
};
  //Functions for editing a todo
  const [open, setOpen] = useState(false);
  const [updateTask, setUpdateTask] = useState({
    title: todo.title,
    description: todo.description,
    priority: todo.priority,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = (e) => {
    setUpdateTask({ ...updateTask, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    updateTodo(updateTask,todo._id);
    setOpen(false);
  };
  return (
    <div className="card">
      <div
        id={todo.priority === "VImportant" ? "red" : "yellow"}
        className="priority"
      ></div>
      <div className="content">
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <div className="utility">
        <DeleteIcon onClick={deleteTodoHandler} />
        <EditIcon onClick={handleOpen}/>
      </div>


      {/* //Adding Modal for updating the todo   */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form className="updateForm" onSubmit={onSubmitHandler}>
          <div className="form-input">
            <TextField
              name="title"
              onChange={handleOnChange}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="form-input">
            <TextField
              name="description"
              onChange={handleOnChange}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
            <div className="form-input">
              <TextField
                name="priority"
                onChange={handleOnChange}
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
             Update Task
            </Button>
          </div>
        </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TodoCard;
