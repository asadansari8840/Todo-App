import {
  createTodoController,
  deleteTodo,
  myTodos,
  updateTodo,
} from "../controllers/todoController";
import express from "express";
const router = express.Router();

router.route("/createtodo").post(createTodoController);
router.route("/updatetodo/:id").put(updateTodo);
router.route("/deletetodo/:id").delete(deleteTodo);
router.route("/mytodos").get(myTodos);

export = router;
