import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {HeaderContainerPropsType} from "./HeaderContainer";

export function Header (props: HeaderContainerPropsType) {
    return (
        <div className={s.header}>
            <div>
                <img src="https://images.squarespace-cdn.com/content/55118181e4b0b179eef19a6a/1544049666709-SE9T7NL6JHKMRKFD2KGW/lotus-bw.png?format=1500w&content-type=image%2Fpng" alt=""/>
            </div>
            <div className={s.login}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </div>
    )
}