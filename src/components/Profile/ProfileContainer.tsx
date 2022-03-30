import React from 'react';
import { ReduxStateType } from '../../redux/redux-store';
import Profile from './Profile';
import { connect } from 'react-redux';
import { ProfileActionTypes, setProfilePageAC } from '../../redux/profile-reducer';
import axios from 'axios';


const mapStateToProps = (state: ReduxStateType) => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: (action: ProfileActionTypes) => void) => {
    return {
        setProfilePage: (profile: any) => {
            dispatch(setProfilePageAC(profile))
        }
    }
}

export type UserProfileType = {
    "aboutMe": string
    "contacts": {
        "facebook": string
        "website": null,
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": null,
        "github": string
        "mainLink": null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": any
        "large": any
    }
}

type ProfileContainerPropsType = {
    setProfilePage: (profile: any) => void
    profile: UserProfileType
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfilePage(response.data)
        })
    }

    render = () => {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);