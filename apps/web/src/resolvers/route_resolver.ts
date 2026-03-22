
import { routeStore } from '../stores/route_store'
import { routeTypes, routePrefixType } from '../actions/route_actions'
import { Action } from '@ltrpc/router/model/action'
import { resolver } from '../types/resolver';
import { userStore } from '../stores/user_store';

export default function (action: Action, next: any): resolver {
  //if (routePrefixType !== action.prefixType) {
  //  return next(null, action);
  //}

  const t = routeTypes

  switch (action.type) {
    case t.routeNavigate:
      if (action.payload && typeof action.payload === 'string') {
        if (action.payload == 'signout') {
          userStore.authenticated = false;
          return next(null, action);
        }
      }
      routeStore.route = action.payload;
      break;
  }
  return next(null, action);
}
