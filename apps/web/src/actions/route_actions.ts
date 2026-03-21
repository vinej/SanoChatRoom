import { Action } from '@db/model/action';
import { dispatch } from '../resolvers/dispatcher';

export let routePrefixType = 'route_'

export let routeTypes = {
  routeNavigate: routePrefixType + 'Navigate',
  clearStore: routePrefixType + 'ClearStore'
}

const t = routeTypes

export default class Routections {

  static routeNaviage(route: string) {
    dispatch(new Action(
      t.routeNavigate,
      route
    ));
  }

  static clearStore() {
    dispatch(new Action(
      t.clearStore,
      {}
    ));
  }
}
