import axios from 'axios';
import { ROOT_URL, HEADERS, PARAMETERS } from './config_service';
import { Service } from '../interfaces/service';

export default class ChatbotService implements Service {
  private static instanceService: ChatbotService | null = null

  constructor() {
    // Constructor doesn't need to set static property
  }

  static setInstance(instanceService: ChatbotService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    if (!this.instanceService) {
      this.instanceService = new ChatbotService()
    }
    return this.instanceService
  }

  ask(question: string, next: (response: string) => void, err: (error: any) => void)
  { 
    axios.post(`${ROOT_URL}/chatbot/ask?${PARAMETERS()}`, {question}, HEADERS())
      .then(response => {
        next(response.data);
      })
      .catch(response => err(response.data));
  };
}
