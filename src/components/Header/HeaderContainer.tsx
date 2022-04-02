import React from 'react';
import { connect } from 'react-redux';
import { AuthActionTypes, authMe, setUserDataAC, UserDataType } from '../../redux/auth-reducer';
import { ReduxStateType } from '../../redux/redux-store';
import Header from './Header';


const mapStateToProps = (state: ReduxStateType): MapStateToPropsHeaderType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        data: state.auth.data
    }
}
const mapDispatchToProps = (dispatch: (action: AuthActionTypes | any) => void): MapDispatchToPropsHeaderType => {
    return {
        setUserData: ({ id, email, login }: UserDataType) => {
            dispatch(setUserDataAC(id, email, login))
        },
        authMe: () => {
            dispatch(authMe())
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
    authMe: () => void
}

export type OwnHeaderPropsType = MapStateToPropsHeaderType & MapDispatchToPropsHeaderType;

class HeaderContainer extends React.Component<OwnHeaderPropsType> {

    componentDidMount = () => {
        this.props.authMe()
    }

    render = () => {
        return <Header {...this.props} />
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

