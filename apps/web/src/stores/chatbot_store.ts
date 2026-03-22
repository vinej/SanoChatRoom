import { Chatbot } from '@ltrpc/router/model/chatbot'
import { makeAutoObservable } from "mobx"

export default class ChatbotStore {
  chatbot: Chatbot = new Chatbot();

  constructor() {
    makeAutoObservable(this);
    //this.init()
  }

  init() {
    this.question = ''
    this.response = ''
  }

  set error(error: string) {
    this.chatbot.error = error
  }

  get error() {
    return this.chatbot.error
  }

  set question(question: string) {
    this.chatbot.question = question
  }

  get question() {
    return this.chatbot.question
  }

  set response(response: string) {
    this.chatbot.response = response
  }

  get response() {
    return this.chatbot.response
  }

  setQuestion(question:string) {
    this.chatbot.messages.push({ 'role': 'user', 'content': question})
  }

  setResponse(response: string) {
    this.chatbot.messages.push({ 'role': 'assistant', 'content': response})
    this.chatbot.response = response
  }
}

export const chatbotStore: ChatbotStore = new ChatbotStore();