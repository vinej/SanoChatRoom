import { User } from '@ltrpc/router/model/user'
import { makeAutoObservable } from "mobx"

export default class UserStore {
  user: User = new User();

  constructor() {
    makeAutoObservable(this);
    //this.init()
  }

  init() {
    this.user.authenticated = false;
    this.user.name = ''
    this.user.email = ''
    this.user.password = ''
    this.user.language = 'fr-CA"'
  }

  signIn(email: string, password:string) {
      // password must be validate with email
      this.user.authenticated = true;
      this.user.email = email;
      this.user.password = password;
      localStorage.setItem('remux-token', this.user.token);
      localStorage.setItem('remux-email', email);
      this.user.name = localStorage.getItem('remux-name') ?? ''
  }

  signUp(name: string, email: string, password:string) {
      this.user.authenticated = true;
      this.user.email = email;
      this.user.password = password;
      this.user.name = name;
      localStorage.setItem('remux-token', this.user.token);
      localStorage.setItem('remux-email', email);
      localStorage.setItem('remux-name', name);
  }

  signOut() {
      this.user.authenticated = false;
      this.user.email = '';
      this.user.password = '';
      this.user.name = '';
      localStorage.removeItem('remux-token');
  }

  get token() {
    return this.user.token;
  }

  set token(token:string) {
    this.user.token = token;
  }

  get language(): string {
    return this.user.language;
  }

  set language(value: string) {
    this.user.language = value
  }

  get email() {
    return this.user.email;
  }

  set email(value: string) {
    this.user.email = value;
  }

  get name() {
    return this.user.name;
  }

  set name(value: string) {
    this.user.name = value;
  }

  get password() {
    return this.user.password;
  }

  set password(value: string) {
    this.user.password = value;
  }

  get authenticated() {
    return this.user.authenticated;
  }

  set authenticated(value: boolean) {
    this.user.authenticated = value;
  }

  get errorMessage() {
    return this.user.errorMessage;
  }

  set errorMessage(value: string) {
    this.user.errorMessage = value;
  }

  setAuthorizations(authorizations: string[]) {
    this.user.authorizations = authorizations;
  }

  isAuthenticated() {
    return this.user.authenticated
  }

  checkToken() {
    const token = localStorage.getItem('remux-token')
    if (token != null && token != '') {
      const name = localStorage.getItem('remux-name');
      if (name == null) {
        this.user.authenticated = false;
        this.user.name = '';
      } else {
        this.user.authenticated = true;
        this.user.name = name;
      }
      this.user.errorMessage = '';
    } else {
      this.user.authenticated = false;
      this.user.name = '';
      this.user.errorMessage = '';
    }
  }

  signInOrUp(token: string, name: string) {
    localStorage.setItem('remux-token', token);
    localStorage.setItem('remux-name', name);
    this.user.authenticated = true;
    this.user.name = name;
  }

  authError(error: string) {
    console.log(error)
  }

}

export const userStore: UserStore = new UserStore();

