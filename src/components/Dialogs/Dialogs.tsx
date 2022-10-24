import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsActionType,
    DialogsType,
    MessagesType,
    onChangeNewTextMessageAC,
    sendMessageAC
} from "../../redax/dialogs-reducer";

type DialogsPropsType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
    onChangeNewTextMessage: (text: string) => void
    sendMessage: () => void

}

export function Dialogs (props: DialogsPropsType) {

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let text = e.target.value;
      props.onChangeNewTextMessage(text)
    }
    const sendMessage = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogs}>
                {props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
                <div>
                    <textarea value={props.newMessageText} onChange={onChangeText}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

