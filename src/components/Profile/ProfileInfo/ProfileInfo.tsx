import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redax/profile-reducer";
import {Preloader} from "../../common/Preloader/Prealoder";


type ProfileInfoPropsType = {
    profile: ProfileType | null
}
export function ProfileInfo (props: ProfileInfoPropsType) {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://img1.akspic.ru/attachments/crops/8/4/3/0/50348/50348-pejzazhi_gor-zhivopis-nebo-rastitelnost-ozero-1920x1080.jpg" alt=""/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )
}