import React, { ChangeEvent, KeyboardEvent } from 'react';
import style from './ProfileStatus.module.css';


type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    enableEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    disableEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {

            this.setState({
                editMode: false
            })
        }
    }

    render = () => {
        return (
            <div className={style.profileStatus}>
                {
                    this.state.editMode
                        ? <input value={this.state.status} autoFocus onBlur={this.disableEditMode} onKeyPress={this.onEnter} onChange={this.onStatusChange} placeholder="What's up?" />
                        : <span onDoubleClick={this.enableEditMode}>{
                            !this.state.status
                                ? "Update your status"
                                : this.state.status
                        }   </span>
                }
            </div >
        )
    }
}
