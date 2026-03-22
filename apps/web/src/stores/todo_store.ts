import { Todo } from '@ltrpc/router/model/todo'
import { makeAutoObservable } from "mobx"

export default class TodoStore {
  todos: Todo[] = []
  todo: Todo = new Todo()
  count: number = 0

  constructor() {
    makeAutoObservable(this);
    this.init()
  }

  setAll(todos: Todo[]) {
    this.todos = todos;
  }

  setTodoCompleted(todo: Todo, completed: boolean) {
    todo.completed = completed;
  }

  setTodoDescription(todo: Todo, description: string) {
    todo.description = description;
  }

  set description(description: string) {
    this.todo.description = description;
  }

  get description() {
    return this.todo.description;
  }

  get completed() {
    return this.todo.completed;
  }

  set completed(completed: boolean) {
    this.todo.completed = completed;
  }

  delete(id: number) {
    const idx = this.todos.findIndex((r) => r.id === id);
    this.todos.splice(idx, 1);
  }

  init() {
    this.count = 0;
    this.todos = [];
    this.todo = new Todo();
    this.todo.description = 'test';
    this.todo.completed = false;
    this.add();
  }

  add() {
    if (this.todo.description === '') return
    let ctodo = new Todo();
    ctodo.description = this.todo.description;
    ctodo.completed = this.todo.completed;
    ctodo.id = this.count;
    this.todos.push(ctodo);
    this.count = this.count + 1
    this.todo.description = '';
    this.todo.completed = false;
  }
}

export const todoStore: TodoStore = new TodoStore();

