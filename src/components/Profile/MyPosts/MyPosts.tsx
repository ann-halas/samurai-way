import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, onChangeNewTextPostAC, PostsType, ProfileActionType} from "../../../redax/profile-reducer";

type MyPostsPropsType = {
    posts: PostsType
    addPost: () => void
    onChangeNewTextPost: (text: string) => void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {

    const addPost = () => {
        props.addPost()
    }
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        props.onChangeNewTextPost (text)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeText} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)}

        </div>
    )
}