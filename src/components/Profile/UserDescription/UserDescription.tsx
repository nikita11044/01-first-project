import React, {ChangeEvent} from "react";
import classes from "../ProfileInfo/ProfileInfo.module.css";
import defaultUserAvatar from "../../../assets/default-user-avatar.jpg";
import {ProfileStatusFunctional} from "../ProfileInfo/ProfileStatus/ProfileStatusFunctional";
import {UserProfileType} from "../../../redux/profile-reducer";

type UserDescriptionPropsType = {
    profile: UserProfileType
    onMainPhotoSelected: (e: ChangeEvent<HTMLInputElement>) => void
    isOwner: boolean
    status: string | null
    updateStatus: (newStatus: string) => void
    toggleEditMode: () => void
}

type ContactsListPropsType = {
    contacts: { [key: string]: string }
    editMode: boolean
}

type ContactPropsType = {
    title: string
    value: string
}

export const UserDescription: React.FC<UserDescriptionPropsType> = ({
                                                                        profile,
                                                                        onMainPhotoSelected,
                                                                        isOwner,
                                                                        status,
                                                                        updateStatus,
                                                                        toggleEditMode
                                                                    }) => {
    return <>
        <div className={classes.descriptionBlock}>
            <div className={classes.userDescription}>
                {isOwner && <button onClick={toggleEditMode}>Edit</button>}
                <div className="img-wrapper">
                    <img className={classes.userAvatar} src={profile.photos.large || defaultUserAvatar}
                         alt="user-avatar"/>
                    {isOwner &&
                    // <div className={classes.photoChangeBubble}>
                    //     <input type="file" onChange={onMainPhotoSelected}/>
                    // </div>
                    <input type="file" onChange={onMainPhotoSelected}/>
                    }
                </div>
                <div className={classes.userNameBlock}>
                    <h3>{profile.fullName}</h3>
                    <ProfileStatusFunctional status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
        <div>
            <h3>About me</h3>
            <p>{profile.aboutMe}</p>
        </div>
        <div className={classes.contactsBlock}>
            <h3>Contacts</h3>
            <ul>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <>
                            <Contact key={key} title={key} value={profile.contacts[key]}/>
                        </>
                    })
                }
            </ul>
        </div>
        <div>
            {`Looking for a job: ${profile.lookingForAJob ? 'yes' : 'no'}`}
        </div>
        <div>
            <h3>My professional skills</h3>
            <p>{profile.lookingForAJobDescription || 'none'}</p>
        </div>
    </>
}

const Contact: React.FC<ContactPropsType> = ({title, value}) => {
    return <li>{title}: {value || `Don't have one`}</li>
}