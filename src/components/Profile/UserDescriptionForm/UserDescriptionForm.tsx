import React from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import classes from "../ProfileInfo/ProfileInfo.module.css";
import defaultUserAvatar from "../../../assets/default-user-avatar.jpg";
import {useFormik} from "formik";

type UserDescriptionFormPropsType = {
    profile: UserProfileType
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

export const UserDescriptionForm: React.FC<UserDescriptionFormPropsType> = ({
                                                                                profile,
                                                                                toggleEditMode,
                                                                     }) => {

    const formik = useFormik({
        initialValues: {
            userName: '',
            aboutMe: '',
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: ''
        },
        onSubmit: values => {
            console.log(values)
            toggleEditMode()
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <div className={classes.descriptionBlock}>
            <div className={classes.userDescription}>
                <button>Save</button>
                <div className="img-wrapper">
                    <img className={classes.userAvatar} src={profile.photos.large || defaultUserAvatar}
                         alt="user-avatar"/>
                </div>
                <div className={classes.userNameBlock}>
                    <h3>{profile.fullName}</h3>
                    <input type="text" placeholder="Change user name" {...formik.getFieldProps('userName')}/>
                </div>
            </div>
        </div>
        <div>
            <h3>About me</h3>
            <p>{profile.aboutMe}</p>
            <textarea placeholder="Tell about yourself" {...formik.getFieldProps('aboutMe')}></textarea>
        </div>
        <div className={classes.contactsBlock}>
            <h3>Contacts</h3>
            <ul>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <>
                            <Contact key={key} title={key} value={profile.contacts[key]}/>
                            <input key={key} type="text" placeholder={key} {...formik.getFieldProps(key)}/>
                        </>
                    })
                }
            </ul>
        </div>
        <div>
            Looking for a job: <input type="checkbox" checked={profile.lookingForAJob} {...formik.getFieldProps('lookingForAJob')}/>
        </div>
        <div>
            <h3>My professional skills</h3>
            <p>{profile.lookingForAJobDescription}</p>
            <textarea placeholder="Describe your skills" {...formik.getFieldProps('lookingForAJobDescription')}></textarea>
        </div>
    </form>
}

const Contact: React.FC<ContactPropsType> = ({title, value}) => {
    return <li>{title}: {value || `Don't have one`}</li>
}