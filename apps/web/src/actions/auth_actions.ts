
import { dispatch } from '../resolvers/dispatcher';
import AuthService from '../services/auth_service';
import { Action } from '@db/model/action';
import {userStore } from '../stores/user_store' 

export let authPrefixType = "auth_"

export let authTypes = {
  authSetAuthorizations   : authPrefixType + 'SetAuthorizations',
  authGetAuthorizations   : authPrefixType + 'GetAuthorizations',
  authLogin               : authPrefixType + 'Login',
  authSignUp              : authPrefixType + 'SignUp',
  authToken               : authPrefixType + 'Token',
  authSignOut             : authPrefixType + 'SignOut',
  authCheckToken          : authPrefixType + 'CheckToken',
  authRefreshToken        : authPrefixType + 'RefreshToken',
  authError               : authPrefixType + 'Error',
  authLanguage            : authPrefixType  +'Language',
}

const t = authTypes

// must use static method to pass them as callback
export default class AuthActions {
  static authCheckToken() {
    dispatch( new Action(t.authCheckToken, null));
  }

  static ChangeLanguage(language: string) {
    dispatch(new Action(t.authLanguage, { language }))
  }

  static authRefresnToken() {
    dispatch( new Action( 
      t.authRefreshToken,
      () => {
        const service = AuthService.getInstance();
        service.refresh({ token: userStore.token }, AuthActions._authLogin, AuthActions.authError);
      }
    ))
  }

  static authGetAuthorizations() {
    dispatch( new Action( 
      t.authGetAuthorizations,
      () => {
        const service = AuthService.getInstance();
        service.getAuthorizations(AuthActions._authSetAuthorizations , AuthActions.authError);
      }
    ))
  }

  // called from service
  static _authSetAuthorizations(authorizations: string[]) {
    dispatch( new Action(t.authSetAuthorizations,authorizations));
  }

  static authLogin(email: string , password: string ) {
    dispatch( new Action(t.authLogin, 
      () => {
        console.log("login")
        const service = AuthService.getInstance();
        service.login({ email, password }, AuthActions._authLogin, AuthActions.authError);
      }
    ))
  }
  
  // called from service
  static _authLogin(token: string, name: string) {
    console.log('login/signup next 2')
    dispatch( new Action(t.authToken, { token, name }));
  }

  static authSignUp(name: string, email: string, password: string) {
    dispatch( new Action(t.authSignUp, () => {
      console.log("signup")
      const service = AuthService.getInstance()
      service.signUp({ name, email, password }, AuthActions._authLogin, AuthActions.authError)
    }))
  }

  // called from service
  static authSignOut() {
    dispatch( new Action(t.authSignOut, null));
  }

  static authError(error: string) {
    dispatch( new Action(t.authError, error));  
  }
}

