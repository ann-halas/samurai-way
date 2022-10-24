export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type PostsType = Array<PostType>
export type ProfilePageType = {
    posts: PostsType
    newPostText: string
}
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
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    getStore: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType | OnChangeNewTextPostActionType
    | SendMassageActionType | OnChangeNewTextMessageActionType

type AddPostActionType = {
    type: 'ADD-POST'
}
type OnChangeNewTextPostActionType = {
    type: 'ON-CHANGE-NEW-TEXT-POST'
    newText: string
}
type SendMassageActionType = {
    type: 'SEND-MESSAGE'
}
type OnChangeNewTextMessageActionType = {
    type: 'ON-CHANGE-NEW-TEXT-MESSAGE'
    newText: string
}


export const addPostAC = (): AddPostActionType => (
    {type: 'ADD-POST'})
export const onChangeNewTextPostAC = (newText: string): OnChangeNewTextPostActionType => (
    {type: 'ON-CHANGE-NEW-TEXT-POST', newText: newText})
export const sendMessageAC = (): SendMassageActionType => (
    {type: 'SEND-MESSAGE'})
export const onChangeNewTextMessageAC = (newText: string): OnChangeNewTextMessageActionType => (
    {type: 'ON-CHANGE-NEW-TEXT-MESSAGE', newText: newText})


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It is my first post!", likeCount: 15},
                {id: 2, message: "How are you?", likeCount: 10},
                {id: 3, message: "It is my second post!", likeCount: 4}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    getStore() {
        return this._state
    },
    _callSubscriber() {
        console.log("Render again")
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
                }
                this._state.profilePage.posts = [...this._state.profilePage.posts, newPost];
                this._state.profilePage.newPostText = '';
                this._callSubscriber();
                break;
            case 'ON-CHANGE-NEW-TEXT-POST':
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber();
                break;
            case 'SEND-MESSAGE':
                let newMessage = {
                    id: 4,
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMessage];
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber();
                break;
            case 'ON-CHANGE-NEW-TEXT-MESSAGE':
                this._state.dialogsPage.newMessageText = action.newText
                this._callSubscriber();
                break;
        }
    }

}