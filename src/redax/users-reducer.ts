import {usersAPI} from "../api/api";
import {StoreDispatch} from "./redax-store";

export type UserType = {
    id: number
    name: string
    followed: boolean
    photos: {
        small: string
        large: string
    }
    status: string

}
export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UsersActionType = FollowActionType | UnfollowActionType  | SetUsersActionType
    | SetTotalCountType | SetCurrentPageType | ToggleFetchingType | FollowingProgressType

type FollowActionType = {
    type: 'FOLLOW'
    id: number
}
type UnfollowActionType = {
    type: 'UNFOLLOW'
    id: number
}
type SetUsersActionType = {
    type: 'SET-USERS'
    users: Array<UserType>
}
type SetTotalCountType = {
    type: 'SET-TOTAL-COUNT'
    totalCount: number
}
type ToggleFetchingType = {
    type: 'TOGGLE-FETCHING'
    isFetching: boolean
}
type FollowingProgressType = {
    type: 'FOLLOWING-PROGRESS'
    isFetching: boolean
    userId: number
}
type SetCurrentPageType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

let initialState: UsersPageType = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 20,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = true
                    }
                    return u
                })

            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = false
                    }
                    return u
                })

            }
        case 'SET-USERS':
            return {...state, users: action.users}

        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.totalCount}

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'TOGGLE-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'FOLLOWING-PROGRESS':
            return {...state, followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
                }

        default:
            return state
    }
}


export const followUser = (userId: number): FollowActionType => (
    {type: 'FOLLOW', id: userId});
export const unfollowUser = (userId: number): UnfollowActionType => (
    {type: 'UNFOLLOW', id: userId});
export const setUsers = (users: Array<UserType>): SetUsersActionType => (
    {type: 'SET-USERS', users});
export const setTotalCounts = (totalCount: number): SetTotalCountType => (
    {type: 'SET-TOTAL-COUNT', totalCount});
export const setCurrentPages = (currentPage: number): SetCurrentPageType => (
    {type: 'SET-CURRENT-PAGE', currentPage});
export const toggleFetching = (isFetching: boolean): ToggleFetchingType => (
    {type: 'TOGGLE-FETCHING',isFetching});
export const followingProgress = (isFetching: boolean, userId: number): FollowingProgressType => (
    {type: 'FOLLOWING-PROGRESS', isFetching, userId});

export const getUsers = (pageSize: number, currentPage: number) => {
    return (dispatch: StoreDispatch) => {
        dispatch(toggleFetching(true));

        usersAPI.getUsers(pageSize, currentPage).then(data => {
                dispatch(toggleFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalCounts(data.totalCount));
            });
    }
}
export const follow = (userId: number) => {
    return (dispatch: StoreDispatch) => {
        dispatch(followingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followUser(userId))
            };
            dispatch(followingProgress(false, userId));
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: StoreDispatch) => {
        dispatch(followingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowUser(userId))
            };
            dispatch(followingProgress(false, userId));
        })
    }
}