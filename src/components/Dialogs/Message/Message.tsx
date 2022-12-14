import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    message: string
    id: number
}

export function Message (props: MessagePropsType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

