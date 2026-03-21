// src/App.tsx
import { Link, Outlet } from '@tanstack/react-router'
import { userStore } from "./stores/user_store";
import AuthActions from './actions/auth_actions';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <div style={{ padding: '1rem' }}>
      <header>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          {!userStore.authenticated ? (
            <>
              <Link to="/">Welcome</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/about">About</Link>
              <Link to="/todo">Todo</Link>
              <Link to="/chatbot">Chatbot</Link>
              <button onClick={() => (AuthActions.authSignOut(), location.reload())}>
                Logout
              </button>
            </>
          )}
        </nav>
      </header>

      <hr />
      <Outlet />
    </div>
  )
})

export default App
