import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AuthActionTypes, setUserDataAC } from '../../redux/auth-reducer';
import { UserDataType, AuthUserType } from '../../redux/redux';
import { ReduxStateType } from '../../redux/redux-store';
import Header from './Header';


const mapStateToProps = (state: ReduxStateType): MapStateToPropsHeaderType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        data: state.auth.data
    }
}
const mapDispatchToProps = (dispatch: (action: AuthActionTypes) => void): MapDispatchToPropsHeaderType => {
    return {
        setUserData: ({ id, email, login }: UserDataType) => {
            dispatch(setUserDataAC(id, email, login))
        }
    }
}


type MapStateToPropsHeaderType = {
    isAuth: boolean
    login: string
    data: UserDataType
}
type MapDispatchToPropsHeaderType = {
    setUserData: ({ id, email, login }: UserDataType) => void
}

export type OwnHeaderPropsType = MapStateToPropsHeaderType & MapDispatchToPropsHeaderType;

class HeaderContainer extends React.Component<OwnHeaderPropsType> {

    componentDidMount = () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            // headers: { 'API-KEY': '60dbbaa9-e2dc-4b9e-b230-07adf0b70edf' }
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setUserData({ id, email, login })
                }
            })

    }

    render = () => {
        return <Header {...this.props} />
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

