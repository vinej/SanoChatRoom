import { Action } from '@ltrpc/router/model/action';
import { dispatch } from '../resolvers/dispatcher';
import ChatbotService from '../services/chatbot_service';
import { waitTypes } from './wait_actions';

// same name of the type is the name of the function, but with a underscore. The pattern need that
export let chatbotPrefixType = 'chatbot_'

export let chatbotTypes = {
  chatbotAsk:       chatbotPrefixType + 'ask',
  chatbotResponse:  chatbotPrefixType + 'response',
  chatbotQuestion:  chatbotPrefixType + 'question',
  chatbotError:     chatbotPrefixType + 'error'
}

const t = chatbotTypes

export default class ChatBotActions {
  static ask(question: string) {
    dispatch(new Action(waitTypes.waitWait, true))
    dispatch(new Action(
      t.chatbotAsk,
      () => {
        const service = ChatbotService.getInstance()
        service.ask(question, ChatBotActions.response, ChatBotActions.error);
      }
    ))
  }

  static response(response: string) {
      dispatch(new Action(
      t.chatbotResponse,
      response
    ))
    dispatch(new Action(waitTypes.waitWait, false))
  }

  static question(question: string) {
      dispatch(new Action(
      t.chatbotQuestion,
      question
    ))
  }

  static error(error: string) {
      dispatch( new Action(t.chatbotError, error));  
  }
}
