import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redax/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

export function Profile (props: ProfilePropsType) {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}