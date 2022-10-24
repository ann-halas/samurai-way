import React from 'react';
import {connect} from "react-redux";
import {StoreDispatch, StoreType} from "../../redax/redax-store";
import {Dialogs} from "./Dialogs";
import {DialogsType, MessagesType, onChangeNewTextMessageAC, sendMessageAC} from "../../redax/dialogs-reducer";

type MapStateToPropsType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
}
type MapDispatchToPropsType = {
    onChangeNewTextMessage: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText

    }
}
const mapDispatchToProps = (dispatch: StoreDispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        onChangeNewTextMessage: (text: string) => {
            dispatch(onChangeNewTextMessageAC(text))
        }
    }
}

export const DialogsContainer  =  connect (mapStateToProps, mapDispatchToProps) (Dialogs);