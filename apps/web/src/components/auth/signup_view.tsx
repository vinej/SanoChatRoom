import authActions from '../../actions/auth_actions'
import { useState } from "react";
import Validator from '../../languages/validators';
import { FieldType } from '../../languages/fieldtypes';
import Languages from '../../languages/languages';
import { observer } from "mobx-react-lite"
import React from 'react';

const SignUpView = observer(() => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSend = () => {
    setErrorMessage("")
    let isName = Validator.validType(name, FieldType.alphanum)
    let isEmail = Validator.validType(email, FieldType.email)
    let isPw = Validator.validType(password, FieldType.password)

    if (isEmail && isPw && isName) {
      authActions.authSignUp(name, email, password);
    } else {
      setErrorMessage("Some fields are wrong")
    }
  }

  return (
    <div>
      <legend>{Languages.GetLabel('signup')}</legend>
      <div>
        <label>{Languages.GetLabel("name")}</label>
        <input name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>{Languages.GetLabel("email")}</label>
        <input name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>{Languages.GetLabel("password")}</label>
        <input name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleSend}>{Languages.GetLabel('signup')}</button>
      </div>


      <div style={{ color: 'red' }}>
        {errorMessage}
      </div>
    </div>
  )
})

export default SignUpView



