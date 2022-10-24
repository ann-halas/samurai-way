import React from 'react';
import {
    addPostAC,
    onChangeNewTextPostAC,
    PostsType
} from "../../../redax/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {StoreDispatch, StoreType} from "../../../redax/redax-store";

type MapStateToPropsType = {
    posts: PostsType
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    onChangeNewTextPost: (text: string) => void
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: StoreDispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onChangeNewTextPost: (text: string) => {
            dispatch(onChangeNewTextPostAC(text))
        }
    }
}

export const MyPostsContainer  =  connect (mapStateToProps, mapDispatchToProps) (MyPosts);