import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {StoreType} from "../../redax/redax-store";
import {getAuthUser} from "../../redax/auth-reducer";

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
        return <Header {...this.props}/>
    }

}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    id: number | null
}
type MapDispatchToPropsType = {
    getAuthUser: () => void
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.userId
    }
}

export default connect(mapStateToProps, {getAuthUser})(HeaderContainer)