import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../redax/redax-store";
import {Users} from "./Users";
import {
    follow, getUsers, unfollow, UserType
} from "../../redax/users-reducer";
import {Preloader} from "../common/Preloader/Prealoder";


type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component  <UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }
    onPageSelect = (page: number) => {
        this.props.getUsers(this.props.pageSize, page);
    }

    render() {
        return (
            this.props.isFetching
                ? <Preloader/>
                : < Users follow={this.props.follow}
                          unfollow={this.props.unfollow}
                          users={this.props.users}
                          totalCount={this.props.totalCount}
                          currentPage={this.props.currentPage}
                          pageSize={this.props.pageSize}
                          onPageSelect={this.onPageSelect}
                          followingInProgress={this.props.followingInProgress}
                />
        )

    }

}


export type MapStateToPropsType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    getUsers: (pageSize: number, currentPage: number) => void

}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}


export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer);