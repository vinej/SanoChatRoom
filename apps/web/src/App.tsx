import LoginView from "./components/auth/login_view";
import SignUpView from "./components/auth/signup_view";
import TodosView from "./components/todo_view";
import WelcomeView from "./components/welcome_view";
import Routections from "./actions/route_actions";
import AuthActions from "./actions/auth_actions";
import FooterView from "./components/footer_view";
import HeaderView from "./components/header_view";
import { userStore } from "./stores/user_store";
import { routeStore } from "./stores/route_store";
import { observer } from "mobx-react-lite"
import Languages from "./languages/languages";
import AboutView from "./components/about_view";
import ChatbotView from "./components/chatbot_view";
import WaitView from "./components/wait_view";
import { waitStore } from "./stores/wait_store";

export const App = observer(() => {
  const navigate = (page: string) => {
    window.history.pushState('', '', page === '/' ? '/' : `/${page}`);
    Routections.routeNaviage(page);
  };

  const renderPage = () => {
    if (userStore.authenticated === false && routeStore.route != 'login' && routeStore.route != 'signup') {
      return <LoginView />;
    }
    else {
      if (userStore.authenticated === true && (routeStore.route == 'login' || routeStore.route == 'signup')) {
        routeStore.route = '/about';
      }

      switch (routeStore.route) {
        case 'login':
          return <LoginView />;
        case 'signup':
          return <SignUpView />;
        case 'about':
          return <AboutView />;
        case 'todo':
          return <WaitView waitStore={waitStore}><TodosView /></WaitView>
        case 'chatbot':
          return <WaitView waitStore={waitStore}><ChatbotView /></WaitView>;
        default:
          return <WelcomeView />;
      }
    }
  };

  return (
    <div>
      <HeaderView />
      <div className='mainmenu'>
        <div>
          {userStore.authenticated ? <a onClick={() => navigate('/')}>{Languages.GetLabel("welcome")}</a> : null}
          {userStore.authenticated ? <a onClick={() => navigate('todo')}>{Languages.GetLabel("todo")}</a> : null}
          {userStore.authenticated ? <a onClick={() => navigate('chatbot')}>{Languages.GetLabel("chatbot")}</a> : null}
          {userStore.authenticated ? <a onClick={() => AuthActions.authSignOut()}>{Languages.GetLabel("signout")}</a> : null}
          {userStore.authenticated ? <a onClick={() => navigate('about')}>{Languages.GetLabel("about")}</a> : null}
        </div>
        {!userStore.authenticated && routeStore.route != 'signup' ? <a className="floatright" onClick={() => navigate('signup')}>{Languages.GetLabel("signup")}</a> : null}
        {!userStore.authenticated && routeStore.route == 'signup' ? <a className="floatright" onClick={() => navigate('login')}>{Languages.GetLabel("login")}</a> : null}
      </div>
      <main>
        {renderPage()}
      </main>
      <FooterView />
    </div>
  );
})   
