import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redax/redax-store";
import {getUserProfile, ProfileType} from "../../redax/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType>  {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }

}

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
  return {
      profile: state.profilePage.profile
  }

}

export default withRouter(connect (mapStateToProps, {getUserProfile})(ProfileContainer))