import { chatbotStore } from '../stores/chatbot_store'
import { chatbotTypes, chatbotPrefixType } from '../actions/chatbot_actions'
import { resolver } from '../types/resolver';
import { Action } from '@ltrpc/router/model/action'
import { routeTypes } from '../actions/route_actions';

export default function (action: Action, next: any): resolver {
    if (routeTypes.clearStore === action.type) {
        chatbotStore.init()
        return next(null, action);
    }

    if (chatbotPrefixType !== action.prefixType) {
        return next(null, action);
    }

    const t = chatbotTypes
    switch (action.type) {
        case t.chatbotResponse:
            chatbotStore.setResponse(action.payload.response)
            break;
        case t.chatbotQuestion:
            chatbotStore.setQuestion(action.payload.question)
            break;
    }
    return next(null, action);
}
