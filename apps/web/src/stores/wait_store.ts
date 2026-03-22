import { Wait } from '@ltrpc/router/model/wait'
import { makeAutoObservable } from "mobx"

export default class WaitStore {
  wait: Wait = new Wait()

  constructor() {
    makeAutoObservable(this);
  }

  get isWaiting() {
    return this.wait.isWaiting;
  }

  set waiting(isWaiting: boolean) {
    this.wait.isWaiting = isWaiting;
  }

  doWait(isSet: boolean) {
    this.waiting = isSet;

    //this.wait.currentToken = this.wait.currentToken + 1
    // allow max 5 seconds of wait, after that unlock the page
    // because there is maybe an unhandle error and the page could be locked
    // It's only a protection for special cases. Cound be desactivated 
    //if (isSet === true) {
    //  window.setTimeout( (token: number) => {
    //   console.log(token, this.wait)
    //    if (this.wait.isWaiting === true && token === this.wait.currentToken) {
    //      console.log('stop waiting after 5 seconds')
    //      this.waiting = false;
    //    }
    //  }, 5000, this.wait.currentToken)
    //}
    //}
  }
}

export let waitStore = new WaitStore();