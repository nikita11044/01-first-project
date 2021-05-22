import React, {ChangeEvent} from 'react';
import defaultUserAvatar from '../../../assets/default-user-avatar.jpg'
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusFunctional} from "./ProfileStatus/ProfileStatusFunctional";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string | null
    savePhoto: (file: File) => void
    updateStatus: (newStatus: string) => void
    isOwner: boolean
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo(({profile, status, updateStatus, isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    if(profile.userId === 0) {
        return <Preloader />
    }
    return (
        <div>
            <div className={classes.coverContainer}>
                {/*<img src="https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/NOV0053.jpg?itok=5d6Ol_29" alt=""/>*/}
            </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.userDescription}>
                    <img className={classes.userAvatar} src={profile.photos.large || defaultUserAvatar} alt="user-avatar"/>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                    <div className={classes.userNameBlock}>
                        <h3>{profile.fullName}</h3>
                        <p>{profile.aboutMe}</p>
                        <ProfileStatusFunctional status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
                <ul>
                    <li>{profile.contacts.github ? profile.contacts.github : `Don't have one`}</li>
                    <li>{profile.contacts.vk ? profile.contacts.vk : `Don't have one`}</li>
                    <li>{profile.contacts.facebook ? profile.contacts.facebook : `Don't have one`}</li>
                    <li>{profile.contacts.instagram ? profile.contacts.instagram : `Don't have one`}</li>
                    <li>{profile.contacts.twitter ? profile.contacts.twitter : `Don't have one`}</li>
                    <li>{profile.contacts.website ? profile.contacts.website : `Don't have one`}</li>
                    <li>{profile.contacts.youtube ? profile.contacts.youtube : `Don't have one`} </li>
                    <li>{profile.contacts.mainLink ? profile.contacts.mainLink : `Don't have one`}</li>
                </ul>
                <div>
                    {`Looking for a job: ${profile.lookingForAJob ? 'yes' : 'no'}`}
                </div>
                {profile.lookingForAJob && <p>{profile.lookingForAJobDescription}</p>}
            </div>
        </div>
    );
})

export default ProfileInfo;