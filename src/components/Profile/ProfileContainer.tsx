import React from 'react';
import Profile from './Profile';
import { ProfileActionTypes, setProfilePage, UserProfileType } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ReduxStateType } from '../../redux/redux-store';


const mapStateToProps = (state: ReduxStateType): MapStateToPropsProfileType => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: (action: ProfileActionTypes | any) => void): MapDispatchToPropsProfileType => {
    return {
        setProfilePage: (userId: string) => {
            dispatch(setProfilePage(userId))
        }
    }
}

type MapStateToPropsProfileType = {
    profile: UserProfileType
}
type MapDispatchToPropsProfileType = {
    setProfilePage: (userId: string) => void
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
            this.props.setProfilePage(userId)
        }

    }

    render = () => {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const UrlDataContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(UrlDataContainer);