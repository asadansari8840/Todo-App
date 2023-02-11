import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import Todo from "../models/todoModel";
import { Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler";
//creating a todo
const createTodoController = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    title: String;
    description: String;
    priority: String;
    const { title, description, priority } = req.body;
    const todo = await Todo.create({
      title,
      description,
      priority,
    });

    res.status(200).json({
      success: true,
      todo,
      message: "Task created successfully",
    });
  }
);

//editing a todo
const updateTodo = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    if (req.params.id.length > 24 || req.params.id.length < 24)
      return next(new ErrorHandler("Invalid id", 404));

    let todo = await Todo.findById(req.params.id);
    if (!todo)
      return next(new ErrorHandler("No todo was found with this id", 404));

    todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  }
);

//deleteing a todo
const deleteTodo = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo)
      return next(new ErrorHandler("Cannot find todo with this id", 404));

    await todo.remove();

    res.status(202).json({
      success: true,
      message: "Todo deleted successfully",
    });
  }
);

//Get all todos
const myTodos = catchAsyncErrors(
  async (req: Request, res: Response, next: any) => {
    const TodoCount = await Todo.countDocuments();
    const Todos = await Todo.find();

    res.status(200).json({
      success: true,
      Todos,
      TodoCount,
    });
  }
);

export { createTodoController, updateTodo, deleteTodo , myTodos};
