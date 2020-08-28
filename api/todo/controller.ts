import { helpers, Context } from "../../deps.ts";
import { todoRepository } from "./repository.ts";

export interface Controller {
  getTodo(ctx: Context): void;
  createTodo(ctx: Context): Promise<void>;
  updateTodo(ctx: Context): Promise<void>;
  deleteTodo(ctx: Context): void;
}

export class TodoController implements Controller {

  getTodo(ctx: Context): void {
    ctx.response.body = Array.from(todoRepository.getTodo().values());
  }

  async createTodo(ctx: Context): Promise<void> {
    const result = ctx.request.body({ type: "json" });
    const todo = await result.value;
    ctx.response.body = todoRepository.createTodo(todo);
  }

  async updateTodo(ctx: Context): Promise<void> {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    const result = ctx.request.body({ type: "json" });
    let todo = await result.value;
    todo.id = id;
    ctx.response.body = todoRepository.updateTodo(todo);
  }

  deleteTodo(ctx: Context): void {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = todoRepository.deleteTodo(id);
  }
}

export const todoController = new TodoController();