import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { routeStore } from "./stores/route_store";
import AuthActions from "./actions/auth_actions";

let browserPath = window.location.pathname.replace('/', '');
routeStore.route = browserPath;

AuthActions.authCheckToken()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
