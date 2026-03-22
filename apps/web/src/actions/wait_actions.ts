import { dispatch } from '../resolvers/dispatcher'
import { Action } from '@ltrpc/router/model/action';

// same name of the type is the name of the function, but with a underscore. The pattern need that
export let waitPrefixType = 'wait_'

export let waitTypes = {
  waitWait: waitPrefixType + 'Wait'
}

const t = waitTypes

// must use static method to pass them as callback
export default class WaitActions {
  static doWait(isSet: boolean) {
    dispatch(new Action(t.waitWait, isSet))
  }
}
