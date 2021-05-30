import React, {ChangeEvent, useState} from 'react';
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {UserDescription} from './UserDescription/UserDescription';
import {Layout} from "antd";
import { UserDescriptionFormAntd } from './UserDescriptionFormAntd/UserDescriptionFormAntd';

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
        <Layout className={classes.profileLayout}>
            {editMode
            && <UserDescriptionFormAntd
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

        </Layout>
    );
})

export default ProfileInfo;