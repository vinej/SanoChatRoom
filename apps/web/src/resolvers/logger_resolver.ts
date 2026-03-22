import { Action } from '@ltrpc/router/model/action'
import { resolver } from '../types/resolver';

export function loggerResolver(action: Action, next: any): resolver {
  console.log("action", action.type, action);
  return next(null, action);
}
