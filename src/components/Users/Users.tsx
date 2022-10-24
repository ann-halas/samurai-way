import React from 'react';
import s from './Users.module.css';
import user from "../../assects/images/user.png"
import {UserType} from "../../redax/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    pageSize: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageSelect: (page: number) => void
    followingInProgress: Array<number>

}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.dialogsBlock}>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span className={p === props.currentPage ? s.selected : ''}
                                 onClick={() => props.onPageSelect(p)}>{p}</span>
                })
                }
            </div>
            <div className={s.dialogs}>
                {props.users.map(u => {

                    const follow = () => {props.follow(u.id)};
                    const unfollow = () => {props.unfollow(u.id)}

                    return (
                        <div className={s.user}>
                            <div className={s.userInfo}>
                                <div>
                                    <NavLink to={"/profile/" + u.id}>
                                        <img src={u.photos.small ? u.photos.small : user} alt=""/>
                                    </NavLink>

                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={unfollow}>UNFOLLOW</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={follow}>FOLLOW</button>}
                                </div>
                            </div>
                            <div className={s.userDescription}>
                                <div className={s.userText}>
                                    <div className={s.userName}>{u.name}</div>
                                    <div className={s.userStatus}>{u.status ? u.status : "No status"}</div>
                                </div>

                            </div>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}



