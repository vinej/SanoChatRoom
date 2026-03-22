import { resolver } from "../types/resolver";
import { Action } from "@ltrpc/router/model/action";

var testFunction: any = null

export function setTestFunction(testFct: any) {
  testFunction = testFct;
}

export default function (action: Action, next: any): resolver {
  if (testFunction) {
    testFunction(action)
  }

  return next(null, action);
}
