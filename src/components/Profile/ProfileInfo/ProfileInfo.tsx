import React, {ChangeEvent, createContext, useState} from 'react';
import defaultUserAvatar from '../../../assets/default-user-avatar.jpg'
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusFunctional} from "./ProfileStatus/ProfileStatusFunctional";
import {UserDescription} from '../UserDescription/UserDescription';
import {UserDescriptionForm} from '../UserDescriptionForm/UserDescriptionForm';
import {Provider} from "react-redux";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string | null
    savePhoto: (file: File) => void
    updateStatus: (newStatus: string) => void
    isOwner: boolean
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo(({
                                                                    profile,
                                                                    status,
                                                                    updateStatus,
                                                                    isOwner,
                                                                    savePhoto
                                                                }) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    if (profile.userId === 0) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.coverContainer}></div>
            {editMode
            && <UserDescriptionForm
                profile={profile}
                toggleEditMode={() => setEditMode(false)}
            />
            || <UserDescription
                toggleEditMode={() => setEditMode(true)}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
                onMainPhotoSelected={onMainPhotoSelected}
            />
            }

        </div>
    );
})

export default ProfileInfo;