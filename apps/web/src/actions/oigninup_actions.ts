import Languages from '../languages/languages'
import { Action } from '@db/model/action'
import { dispatch } from '../resolvers/dispatcher'

export let signInUpPrefixType = "signInUpValidate_"

export let signInUpTypes = {
  signInUpValidateEmail: signInUpPrefixType + 'Email',
  signInUpValidatePassword: signInUpPrefixType + 'Password',
  signInUpValidateConfirmPassword: signInUpPrefixType + 'ConfirmPassword',
  signInUpValidateName: signInUpPrefixType + 'Name',
  signIn: signInUpPrefixType + 'login',
  signOut: signInUpPrefixType + 'SignOut',
  signUp: signInUpPrefixType + 'SignUp',
  ChangeLanguage: signInUpPrefixType + 'ChangeLanguage',
}

const t = signInUpTypes

// must use static method to pass them as callback
export default class signInUpActions {
  static Logfin(email: string, password: string) {
    dispatch(new Action(t.signIn, { email, password }))
  }

  static SignOut() {
    if (window.confirm(Languages.GetLabel('signoutconfirm'))) {
      dispatch(new Action(t.signOut, {}))
    }
  }

  static SignUp(name: string, email: string, password: string) {
    dispatch(new Action(t.signUp, { name, email, password }))
  }

  static ChangeLanguage(language: string) {
    dispatch(new Action(t.ChangeLanguage, { language }))
  }

  static validateEmail(email: string) {
    dispatch(new Action(t.signInUpValidateEmail, { email }))
  }

  static validatePassword(password: string) {
    dispatch(new Action(t.signInUpValidatePassword, { password }))
  }

  static validateConfirmPassword(password: string, confirmPassword: string) {
    dispatch(new Action(t.signInUpValidateConfirmPassword, { password, confirmPassword }))
  }

  static validateName(name: string) {
    dispatch(new Action(t.signInUpValidateName, { name }))
  }

  static _validateName() {
    return {
      type: t.signInUpValidateName
    }
  }
}

