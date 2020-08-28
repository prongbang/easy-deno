import { Router } from "../../deps.ts";
import { todoController } from "./controller.ts";

export const todoRouter = new Router()
  .get("/todo", todoController.getTodo)
  .post("/todo", todoController.createTodo)
  .put("/todo/:id", todoController.updateTodo)
  .delete("/todo/:id", todoController.deleteTodo);
