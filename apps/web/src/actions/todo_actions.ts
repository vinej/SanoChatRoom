import Languages from '../languages/languages';
import { Action } from '@db/model/action';
import { Todo } from '@db/model/todo';
import { dispatch } from '../resolvers/dispatcher';
import TodoService from '../services/todo_service';

// same name of the type is the name of the function, but with a underscore. The pattern need that
export let todoPrefixType = 'todo_'

export let todoTypes = {
  todoAdd: todoPrefixType + 'Add',
  todoDelete: todoPrefixType + 'Delete',
  todoDescription: todoPrefixType + 'Description',
  todoSetDescription: todoPrefixType + 'SetDescription',
  todoSetCompleted: todoPrefixType + 'SetCompleted',
  todoGetAll: todoPrefixType + 'GetAll'
}

const t = todoTypes

export default class TodoActions {

  static todoGetAll() {
    dispatch(new Action(
      t.todoGetAll,
      () => {
        const service = TodoService.getInstance()
        service.getAll(TodoActions._todoGetAll, TodoActions.todoError);
      }
    ))
  }

  static _todoGetAll(todos: Todo[]) {
    dispatch(new Action(t.todoGetAll, todos))
  }

  static todoAdd() {
    dispatch(new Action(t.todoAdd, null))
  }

  static todoDelete(id: number, description: string) {
    if (window.confirm(Languages.GetLabel('todoDelConfirm')+` : ${id}:${description} ?`)) {
      dispatch(new Action(t.todoDelete, id));
    }
  }

  static todoDescription(description: string) {
    dispatch(new Action(t.todoDescription, description))
  }

  static todoSetDescription(todo: Todo, description: string) {
    dispatch(new Action(t.todoSetDescription, { todo, description }))
  }

  static todoSetCompleted(todo: Todo, completed: boolean) {
    dispatch(new Action(t.todoSetCompleted, { todo, completed }))
  }

  static todoError(error: string) {
    alert(error)
  }
}
