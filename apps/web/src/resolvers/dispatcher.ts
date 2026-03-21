import { Action } from '@db/model/action';

import { thunkResolver }          from './thunk_resolver';
import { loggerResolver }         from './logger_resolver';
import authResolver               from './auth_resolver';
import todoResolver               from './todo_resolver';
import routeResolver              from './route_resolver';
import waitResolver               from './wait_resolver';
import chatbot_resolver           from './chatbot_resolver';

class ParallelAction {
  _count: number
  _next: any

  constructor(count: number, next: any) {
    this._count = count
    this._next = next
  }

  isAllDone() {
    this._count = this._count - 1
    return this._count === 0
  }

  get next() {
    return this._next
  }

  set next(value) {
    this._next = value
  }
}

class Dispatcher {

  stdResolversAll: any[]

  constructor() {
    this.stdResolversAll = []
  }

  addResolver(resolver: any) {
    this.stdResolversAll.push(resolver)
  }

  next(err: any, result: any) {
    if (err) {
      console.log("Error:", err)
      return null
    } else {
      return result
    }
  }

  dispatch(action: Action) {
    action.prefixType = action.type.substr(0, action.type.indexOf("_") + 1)
    var i = 0
    for (i = 0; i < this.stdResolversAll.length; i++) {
      const resolver = this.stdResolversAll[i]
      action = resolver(action, this.next);
      if (!action) return;
    }
  }

  dispatchNext(action: Action) {
    action.min = action.min + 1
    if (action.min < action.max) {
      let nextAction = action.list[action.min]()

      if (typeof nextAction === 'function') {
        nextAction()
      } else {
        nextAction.min = action.min
        nextAction.max = action.max
        nextAction.list = action.list
        nextAction.next = dispatchNext
        dispatch(nextAction)
      }
    }
  }

  /*
  dispatchSynchronousActions(actionList: Action[]) {
    let nextAction = actionList[0]()
    if (typeof nextAction === 'function') {
      nextAction()
    } else {
      nextAction.min = 0
      nextAction.max = actionList.length
      nextAction.list = actionList
      nextAction.next = dispatchNext
      dispatch(nextAction)
    }
  }
*/

  /*
  dispatchParalleNext(action: Action) {
    if (action.parallelAction.isAllDone()) {
      action.parallelAction.next()
    }
  }

  dispatchParallelActions(actionList: Action[], next: any) {
    var parallelAction = new ParallelAction(actionList.length, next)
    var i = 0
    for(i = 0; i < actionList.length ; i++) {
      let action = actionList[i]()
      action.parallelAction = parallelAction
      action.next = dispatchParalleNext
      dispatch(action)
    }
  }
    */
}

export let dispatcher = new Dispatcher();

// the ORDER is important here

// logger first
dispatcher.addResolver(loggerResolver)

// event remux system
dispatcher.addResolver(waitResolver)

// thunk for services
dispatcher.addResolver( thunkResolver )

// no special order for functionnal resolvers
dispatcher.addResolver(routeResolver)

// authentification
dispatcher.addResolver( authResolver )

dispatcher.addResolver(todoResolver)

dispatcher.addResolver(chatbot_resolver)

// resolvers for testing purpose at the end
//dispatcher.addResolver( testResolver )

export const dispatch = dispatcher.dispatch.bind(dispatcher)
//export const dispatchParalleNext = dispatcher.dispatchParalleNext.bind(dispatcher)
export const dispatchNext = dispatcher.dispatchNext.bind(dispatcher)
//export const dispatchSynchronousActions = dispatcher.dispatchSynchronousActions.bind(dispatcher)
//export const dispatchParallelActions = dispatcher.dispatchParallelActions.bind(dispatcher)
