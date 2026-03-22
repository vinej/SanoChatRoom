import { makeAutoObservable } from "mobx";
class User {
    id = 0;
    token = 'xxxx';
    dateCreated = new Date();
    name = '';
    email = '';
    password = '';
    authenticated = false;
    errorMessage = '';
    isAutorizationInit = false;
    authorizations = [];
    language = 'fr-CA';
    constructor() {
        makeAutoObservable(this);
    }
}
export { User };
