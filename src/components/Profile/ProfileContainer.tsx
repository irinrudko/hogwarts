import React from 'react';
import { ReduxStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { connect } from 'react-redux';
import { ProfileActionTypes, setProfilePageAC } from '../../redux/profile-reducer';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router';
import { UserProfileType } from '../../redux/redux';


const mapStateToProps = (state: ReduxStateType): MapStateToPropsProfileType => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: (action: ProfileActionTypes) => void): MapDispatchToPropsProfileType => {
    return {
        setProfilePage: (profile: UserProfileType) => {
            dispatch(setProfilePageAC(profile))
        }
    }
}

type MapStateToPropsProfileType = {
    profile: UserProfileType
}
type MapDispatchToPropsProfileType = {
    setProfilePage: (profile: UserProfileType) => void
}
type MatchParamsType = {
    userId?: string
}
type OwnProps = MapStateToPropsProfileType & MapDispatchToPropsProfileType;
type ProfileContainerPropsType = RouteComponentProps<MatchParamsType> & OwnProps;




class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setProfilePage(response.data)
        })
    }

    render = () => {

        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const UrlDataContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(UrlDataContainer);