import React from 'react';
import Profile from './Profile';
import { ProfileActionTypes, getProfilePage, UserProfileType } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../redux/redux-store';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthReducer';


const mapStateToProps = (state: ReduxStateType): MapStateToPropsProfileType => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: (action: ProfileActionTypes | any) => void): MapDispatchToPropsProfileType => {
    return {
        getProfilePage: (userId: string) => {
            dispatch(getProfilePage(userId))
        }
    }
}

type MapStateToPropsProfileType = {
    profile: UserProfileType
}
type MapDispatchToPropsProfileType = {
    getProfilePage: (userId: string) => void
}
type MatchParamsType = {
    userId?: string
}
type OwnProps = MapStateToPropsProfileType & MapDispatchToPropsProfileType;
type ProfileContainerPropsType = RouteComponentProps<MatchParamsType> & OwnProps;




class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (userId) {
            this.props.getProfilePage(userId)
        }

    }

    render = () => {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)