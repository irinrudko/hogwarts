import React from 'react';
import { ActionTypes } from '../../redux/redux';
import { Store } from 'redux';
import { ReduxStateType } from '../../redux/redux-store';
import Profile from './Profile';

type PostItem = {
    id: string
    message: string
    likesCount: number
}

type PostsData = {
    posts: Array<PostItem>
    textPost: string
    dispatch: (action: ActionTypes) => void
    store: Store<ReduxStateType, ActionTypes>

}

class ProfileContainer extends React.Component<PostsData> {
    render = () => {
        return <Profile {...this.props} />
    }
}


export default ProfileContainer;