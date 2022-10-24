import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likeCount: number
    id: number
}

export function Post (props: PostPropsType) {
    return (
        <div className={s.post}>
            <div className={s.post_block}>
                <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt=""/>
                {props.message}
            </div>
            <div>{props.likeCount}</div>


        </div>
    )
}