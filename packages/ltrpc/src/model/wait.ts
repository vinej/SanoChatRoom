import { makeAutoObservable } from "mobx"

class Wait {
    isWaiting: boolean = false;
    currentToken: number = 0;

    constructor() {
        makeAutoObservable(this);
    }
}

export { Wait };