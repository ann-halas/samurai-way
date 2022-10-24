export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsType = Array<DialogType>
export type MessagesType = Array<MessageType>
export type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
}

export type DialogsActionType = SendMassageActionType | OnChangeNewTextMessageActionType
type SendMassageActionType = {
    type: 'SEND-MESSAGE'
}
type OnChangeNewTextMessageActionType = {
    type: 'ON-CHANGE-NEW-TEXT-MESSAGE'
    newText: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Anya"},
        {id: 3, name: "Alena"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Igor"},
        {id: 6, name: "Vlad"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "So, what are your plans for this weekend?"},
        {id: 3, message: "I don’t know. Do you want to get together or something?"}
    ],
    newMessageText: ''
}


export const dialogsReducer = ( state = initialState, action: DialogsActionType): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: '' }
        case 'ON-CHANGE-NEW-TEXT-MESSAGE':
            return {...state, newMessageText: action.newText };
        default:
            return state
    }
}


export const sendMessageAC = (): SendMassageActionType => (
    {type: 'SEND-MESSAGE'})
export const onChangeNewTextMessageAC = (newText: string): OnChangeNewTextMessageActionType => (
    {type: 'ON-CHANGE-NEW-TEXT-MESSAGE', newText: newText})