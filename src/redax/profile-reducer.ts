import {StoreDispatch} from "./redax-store";
import {profileAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type PostsType = Array<PostType>
export type ProfilePageType = {
    posts: PostsType
    newPostText: string
    profile: ProfileType | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }

}

export type ProfileActionType = AddPostActionType | OnChangeNewTextPostActionType | SetProfileActionType
type AddPostActionType = {
    type: 'ADD-POST'
}
type OnChangeNewTextPostActionType = {
    type: 'ON-CHANGE-NEW-TEXT-POST'
    newText: string
}
type SetProfileActionType = {
    type: 'SET-PROFILE'
    profile: ProfileType
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "It is my first post!", likeCount: 15},
        {id: 2, message: "How are you?", likeCount: 10},
        {id: 3, message: "It is my second post!", likeCount: 4}
    ],
    newPostText: '',
    profile: null
}


export const profileReducer = (state = initialState, action:ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            return {...state, posts:[...state.posts, newPost], newPostText: '' };
        case 'ON-CHANGE-NEW-TEXT-POST':
            return {...state,  newPostText: action.newText };
        case 'SET-PROFILE':
            return {...state,  profile: action.profile };
        default:
            return state

    }
}


export const addPostAC = (): AddPostActionType => (
    {type: 'ADD-POST'});
export const onChangeNewTextPostAC = (newText: string): OnChangeNewTextPostActionType => (
    {type: 'ON-CHANGE-NEW-TEXT-POST', newText});
export const setProfile = (profile: ProfileType): SetProfileActionType => (
    {type: 'SET-PROFILE', profile});

export  const  getUserProfile = (userId: string) => {
    return (dispatch: StoreDispatch) => {
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setProfile(response.data))
        });
    }
}