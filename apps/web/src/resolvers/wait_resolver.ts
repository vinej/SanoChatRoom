
import { Action } from '@db/model/action'
import { resolver } from '../types/resolver';
import { waitStore } from '../stores/wait_store';
import { waitPrefixType, waitTypes } from '../actions/wait_actions';

//declare const waitResolver: (action: Action, next: (err: any, result: any) => any) => Action | undefined;

export default function (action: Action, next: any): resolver {
  if (waitPrefixType !== action.prefixType) {
    return next(null, action);
  }
  const t = waitTypes
  switch (action.type) {
    case t.waitWait:
      waitStore.doWait(action.payload);
      break
  }
  return next(null, action);
}
