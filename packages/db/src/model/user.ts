import { makeAutoObservable } from "mobx"

class User {
    id: number = 0;
    token: string = 'xxxx';
    dateCreated: Date = new Date();
    name: string = '';
    email: string = '';
    password: string = '';
    authenticated: boolean = false;
    errorMessage: string = '';
    isAutorizationInit: boolean = false;
    authorizations: string[] = [];
    language: string = 'fr-CA';

    constructor() {
        makeAutoObservable(this)
    }
}

export { User };