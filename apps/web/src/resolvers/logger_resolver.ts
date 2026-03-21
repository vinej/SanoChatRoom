import { Action } from '@db/model/action'
import { resolver } from '../types/resolver';

export function loggerResolver(action: Action, next: any): resolver {
  console.log("action", action.type, action);
  return next(null, action);
}
