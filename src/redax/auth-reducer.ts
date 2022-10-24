import {StoreDispatch} from "./redax-store";
import {headerAPI} from "../api/api";

export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
}
export type AuthType = {
    isAuth: boolean
    userId: number | null
    email: string | null
    login: string | null
}

export type AuthActionType = SetAuthUserActionType
type SetAuthUserActionType = {
    type: 'SET-AUTH-USER'
    data: AuthDataType
}

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case 'SET-AUTH-USER':
            return {...state, ...action.data, isAuth: true};

        default:
            return state

    }
}


export const setAuthUser = (userId: number, email: string, login: string): SetAuthUserActionType => (
    {type: 'SET-AUTH-USER', data: {userId, email, login}});

export const getAuthUser = () => {
    return (dispatch: StoreDispatch) => {
        headerAPI.auth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUser(id, email, login));
            }
        });
    }
}
