import AuthActions from '../../actions/auth_actions'
import { useState } from "react";
import Validator from '../../languages/validators';
import { FieldType } from '../../languages/fieldtypes';
import Languages from '../../languages/languages';
import { observer } from "mobx-react-lite"
import { authStore } from '../../stores/auth_store';
import React from 'react';

const LoginView = observer(() => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSend = () => {

    let isEmail = Validator.validType(email, FieldType.email)
    let isPw = Validator.validType(password, FieldType.password)

    if (isEmail && isPw) {
      AuthActions.authLogin(email, password);
    } else {
      setErrorMessage("Some fields are wrong")
    }
  }

  return (
    <div>
      <legend>{Languages.GetLabel('RRCT')}</legend>
      <br/>
        <label>{Languages.GetLabel("email")}</label>
        <input name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => setEmail(e.target.value)}
          {...(authStore.error != '' ? { error: true, helperText: "Invalid email or password" } : {})}
        />

        <label>{Languages.GetLabel("password")}</label>
        <input name="password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          onBlur={(e) => setPassword(e.target.value)}
          {...(authStore.error != '' ? { error: true, helperText: "Invalid email or password" } : {})}
        />
      <div>
        <button onClick={handleSend}>{Languages.GetLabel('login')}</button>
      </div>


      <div style={{ color: 'red' }}>
        {errorMessage}
      </div>
    </div>
  )
})

export default LoginView



