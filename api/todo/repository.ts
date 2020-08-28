import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Todo } from "../todo/model.ts";

export interface Repository {
  getTodo(): Map<string, Todo>;
  createTodo(todo: Todo): Todo;
  updateTodo(todo: Todo): Todo;
  deleteTodo(id: string): Todo;
}

export class TodoRepository implements Repository {
  todos = new Map<string, Todo>();

  getTodo(): Map<string, Todo> {
    return this.todos;
  }

  createTodo(todo: Todo): Todo {
    todo.id = v4.generate();
    this.todos.set(todo.id, todo);
    return todo;
  }

  updateTodo(todo: Todo): Todo {
    this.todos.set(todo.id, todo);
    return todo;
  }

  deleteTodo(id: string): Todo {
    const todo = this.todos.get(id) as Todo;
    this.todos.delete(id);
    return todo;
  }
}

export const todoRepository: Repository = new TodoRepository();
