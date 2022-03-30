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

type UserPhotoType = {
    "small": string
    "large": string

}

export type UserProfileType = {
    "userId": number
    "aboutMe": string
    "contacts": {
        "facebook": string
        "website": string
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": string
        "github": string
        "mainLink": string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "photos": UserPhotoType
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