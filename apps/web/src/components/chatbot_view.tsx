import ChatbotActions from '../actions/chatbot_actions'
import { chatbotStore } from '../stores/chatbot_store';
import { useState } from "react";
import { observer } from "mobx-react-lite"
import Languages from '../languages/languages';
import React from 'react';

const ChatbotView = observer(() => {

  const [question, setQuestion] = useState<string>('')

  const handleSend = () => {
      ChatbotActions.ask(question);
  }

  return (
    <div>
      <legend>{Languages.GetLabel('Chatbot')}</legend>

      <div>
        <label>{Languages.GetLabel("question")}</label>
        <input name="question"
          style= {{ width: '400px'}}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onBlur={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div>
        <label>{Languages.GetLabel("response")}</label>
        <div>{chatbotStore.response}</div>
      </div>

      <div>
        <button onClick={handleSend}>{Languages.GetLabel('ask')}</button>
      </div>

      <div style={{ color: 'red' }}>
        {chatbotStore.error}
      </div>
    </div>
  )
})

export default ChatbotView


