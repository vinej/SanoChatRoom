import authActions from '../actions/auth_actions';
import { userStore } from '../stores/user_store';
import { observer } from "mobx-react-lite"
import Languages from '../languages/languages';
import React from 'react';

const HeaderView = observer(() => {
  const handleChange = (event: any) => {
    authActions.ChangeLanguage(event.target.value)
  };

  return (
     <div>
      <div>React Remux Chat Template</div>
      <div>
      <select name="language" id="language" onChange={handleChange} defaultValue={userStore.language} >
        <option value="en-US">English</option>
        <option value="fr-CA">Francais</option>
      </select>
      </div>
      {Languages.GetLabel('language')}: {userStore.language} ,
      {Languages.GetLabel('name')}: {userStore.name} ,
      {Languages.GetLabel('email')}: {userStore.email} ,
      {Languages.GetLabel('token')}: {userStore.token} ,
      {userStore.authenticated ? Languages.GetLabel('authenticated') : Languages.GetLabel('notauthenticated')}
    </div>

  )
}
)

export default HeaderView





