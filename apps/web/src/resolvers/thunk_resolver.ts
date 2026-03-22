import { Action } from '@ltrpc/router/model/action'
import { resolver } from '../types/resolver';

export function thunkResolver(action: Action, next: any): resolver {
  if (typeof action.payload === 'function') {
    console.log('calling a service :'+ action.payload)
    return action.payload();
  } else {
    return next(null, action);
  }
}
