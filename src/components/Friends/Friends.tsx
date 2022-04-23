import React from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthReducer';
import style from './Friends.module.css';

const Friends = () => {
    return (
        <div className={style.item}>
            Friends
        </div>
    )
}

export default compose(withAuthRedirect)(Friends)