import React, {ChangeEvent, useState} from 'react';
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {UserDescription} from './UserDescription/UserDescription';
import {UserDescriptionForm} from './UserDescriptionForm/UserDescriptionForm';
import {Image, Layout} from "antd";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string | null
    savePhoto: (file: File) => void
    updateStatus: (newStatus: string) => void
    isOwner: boolean
}

const { Header, Content, Footer, Sider } = Layout;

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
    // return (
    //     <div>
    //         <div className={classes.coverContainer}></div>
    //         {editMode
    //         && <UserDescriptionForm
    //             profile={profile}
    //             toggleEditMode={() => setEditMode(false)}
    //         />
    //         || <UserDescription
    //             toggleEditMode={() => setEditMode(true)}
    //             profile={profile}
    //             status={status}
    //             updateStatus={updateStatus}
    //             isOwner={isOwner}
    //             onMainPhotoSelected={onMainPhotoSelected}
    //         />
    //         }
    //
    //     </div>
    // );
    return (
        <Layout>
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

        </Layout>
    );
})

export default ProfileInfo;