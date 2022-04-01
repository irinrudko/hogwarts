import React from 'react';
import { UserProfileType } from '../../../redux/profile-reducer';
import { Preloader } from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';

type ProfileInfoType = {
    profile: UserProfileType
}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile.photos) {
        //необходимая проверка. иначе выдаёт undefined
        return <Preloader />
    }


    let contacts = Object.entries(props.profile.contacts || {}).map(([key, value]) => {
        return (
            <>
                <div className={style.contacts}>
                    <div className={style.keys}>{`${key}`}</div>
                    <div>{`${value}`}</div>
                </div>
            </>
        )
    });



    return (
        <>
            <div>
                <img src={props.profile.photos.large} />
            </div>
            <div>
                <h2>{props.profile.fullName}</h2>
            </div>

            <div className={style.description}>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>

                <div>{contacts}</div>
            </div>
        </>
    )

}

export default ProfileInfo;
