import { makeAutoObservable } from "mobx"

class Chatbot {  
    summary: string = '';
    facts: Record<string,string>[] = []
    content: string[] = [];
    messages: Record<string,string>[] = []
    category: string = 'general'
    question: string = 'hello'
    response: string = 'welcome'
    error: string = ''

    constructor() {
        makeAutoObservable(this);
    }
}

export { Chatbot };