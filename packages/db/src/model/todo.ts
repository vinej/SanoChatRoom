import { makeAutoObservable } from "mobx"

class Todo {
    id: number = 0;
    dateCreated: Date = new Date();
    description: string = '';
    completed: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}

export { Todo };