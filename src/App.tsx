import React from 'react';
import s from './App.module.css';
import {Sidebar} from './components/Sidebar/Sidebar';
import { Route } from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppPropsType = {

}

function App(props: AppPropsType) {
    return (
            <div className={s.app}>
                <HeaderContainer/>
                <Sidebar/>
                <div className={s.content}>
                    <Route path='/profile/:userId'
                           render={() => <ProfileContainer />}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}
                    />
                    <Route path='/users'
                           render={() => <UsersContainer />}
                    />
                </div>

            </div>
    );
}

export default App;
