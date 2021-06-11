import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: UserProfileType
    status: string | null
    updateStatus: (newStatus: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Profile: React.FC<ProfilePropsType> = React.memo(({profile, status, updateStatus, isOwner, savePhoto}) => {
    return <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto}/>
})

export default Profile