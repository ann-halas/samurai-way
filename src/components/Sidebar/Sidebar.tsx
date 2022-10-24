import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

export function Sidebar() {
    return (
        <div className={s.sidebar}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href="#" className={s.item}>News</a>
            </div>
            <div className={s.item}>
                <a href="#" className={s.item}>Music</a>
            </div>
            <div className={s.item}>
                <a href="#" className={s.item}>Settings</a>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
        </div>
    )
}
