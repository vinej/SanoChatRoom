
import { Action } from '@db/model/action'
import { authStore } from '../stores/auth_store'
import { userStore } from '../stores/user_store'
import { authTypes, authPrefixType  } from '../actions/auth_actions'
import { resolver } from '../types/resolver';
import { routeTypes } from '../actions/route_actions';
import { dispatch } from '../resolvers/dispatcher';
import { routeStore } from '../stores/route_store';

export default function(action: Action, next: any): resolver {
  if (routeTypes.clearStore === action.type) {
    userStore.init()
    return next(null, action);
  }
  
  if (authPrefixType !== action.prefixType) {
    return next(null, action);
  }

  const t = authTypes
  switch(action.type) {
    case t.authLanguage:
      userStore.language = action.payload.language
      break;
    case t.authSetAuthorizations:
      authStore.setAuthorizations(action.payload.authorizations)
      break;
    case t.authCheckToken:
      authStore.checkToken()
      break;
    case t.authToken:
    case t.authRefreshToken:
    case t.authLogin:
    case t.authSignUp: 
      authStore.signInOrUp(action.payload.token, action.payload.name)
      if (routeStore.route == "signup" || routeStore.route == "login"){
        dispatch(new Action(routeTypes.routeNavigate, "/"))
      }
      else {
        dispatch(new Action(routeTypes.routeNavigate, routeStore.route))
      }
    case t.authSignOut:
      authStore.signOut()
      dispatch(new Action(routeTypes.clearStore, {}))
      break;
    case t.authError:
      authStore.authError(action.payload)
      break;
  }
  return next(null, action);
}

