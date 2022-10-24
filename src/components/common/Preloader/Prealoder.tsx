import s from "../../Users/Users.module.css";
import preloader from "../../../assects/images/preloader.svg";
import React from "react";


export function Preloader (){
    return(
        <div className={s.dialogsBlock}>
            <img src={preloader} alt=""/>
        </div>
    )
}

