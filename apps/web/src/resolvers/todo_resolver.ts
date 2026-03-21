import { todoStore } from '../stores/todo_store'
import { todoTypes, todoPrefixType } from '../actions/todo_actions'
import { routeTypes } from '../actions/route_actions';
import { resolver } from '../types/resolver';
import { Action } from '@db/model/action'
import { waitTypes } from '../actions/wait_actions';
import { dispatch } from '../resolvers/dispatcher';

//declare const todoResolver: (action: Action, next: (err: any, result: any) => any) => Action | undefined;

export default function (action: Action, next: any): resolver {

  //if (  todoPrefixType !== action.prefixType && 
  //      action.type != authTypes.authSignOut ) {
  //  return next(null, action);
  //}

  //if (action.type == authTypes.authSignOut) {
  //  todoStore.init()
  //  return next(null, action);
  //}


  if (routeTypes.clearStore === action.type) {
    todoStore.init()
    return next(null, action);
  }

  const t = todoTypes
  switch (action.type) {
    case t.todoAdd:
      dispatch(new Action(waitTypes.waitWait, true))
      todoStore.add()
      dispatch(new Action(waitTypes.waitWait, false))
      break;
    case t.todoDelete:
      todoStore.delete(action.payload)
      break;
    case t.todoDescription:
      todoStore.description = action.payload
      break;
    case t.todoSetDescription:
      todoStore.setTodoDescription(action.payload.todo, action.payload.description)
      break;
    case t.todoSetCompleted:
      todoStore.setTodoCompleted(action.payload.todo, action.payload.completed)
      break;
    case t.todoGetAll:
      todoStore.setAll(action.payload)
      break;
  }
  return next(null, action);
}
