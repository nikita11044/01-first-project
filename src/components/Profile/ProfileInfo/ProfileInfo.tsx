import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/NOV0053.jpg?itok=5d6Ol_29" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>ava + descr</div>
        </div>
    );
}

export default ProfileInfo;