
import { makeAutoObservable } from "mobx"

export default class RouteStore {
  current_route: string = '/'

  constructor() {
    makeAutoObservable(this);
  }

  get route(): string {
    return this.current_route;
  }

  set route(route: string) {
    this.current_route = route;
  }
}

export let routeStore = new RouteStore();
