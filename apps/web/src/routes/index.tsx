// src/routes/index.tsx
import {
  Router,
  RootRoute,
  Route,
  redirect,
} from '@tanstack/react-router'

import LoginView from '../components/auth/login_view'
import SignUpView  from '../components/auth/signup_view'
import AboutView from '../components/about_view'
import TodoView from '../components/todo_view'
import ChatbotView  from '../components/chatbot_view'
import WelcomeView from '../components/welcome_view'
import App from '../App'
import { userStore } from "../stores/user_store";

/**
 * Root route: wraps everything with <App/>
 */
const rootRoute = new RootRoute({
  component: App,
})

/**
 * Public routes — no authentication required
 */
const publicRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: WelcomeView,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginView,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: SignUpView,
  }),
]

/**
 * Protected routes — require authentication
 */
const protectedRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: '/about',
    beforeLoad: () => {
      if (!userStore.authenticated) {
        throw redirect({ to: '/login' })
      }
    },
    component: AboutView,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/todo',
    beforeLoad: () => {
      if (!userStore.authenticated) {
        throw redirect({ to: '/login' })
      }
    },
    component: TodoView,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/chatbot',
    beforeLoad: () => {
      if (!userStore.authenticated) {
        throw redirect({ to: '/login' })
      }
    },
    component: ChatbotView,
  }),
]

/**
 * Build the route tree and router
 */
const routeTree = rootRoute.addChildren([...publicRoutes, ...protectedRoutes])
export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

