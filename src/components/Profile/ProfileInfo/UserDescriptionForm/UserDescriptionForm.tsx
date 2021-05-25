import React from "react";
import {updateProfile, UserProfileType} from "../../../../redux/profile-reducer";
import classes from "../ProfileInfo.module.css";
import defaultUserAvatar from "../../../../assets/default-user-avatar.jpg";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import * as yup from 'yup'

type UserDescriptionFormPropsType = {
    profile: UserProfileType
    toggleEditMode: () => void
}

type ContactPropsType = {
    title: string
    value: string
}

type ContactsListElementType = 'facebook'
    | 'website'
    | 'vk'
    | 'twitter'
    | 'instagram'
    | 'youtube'
    | 'github'
    |'mainLink'

export const UserDescriptionForm: React.FC<UserDescriptionFormPropsType> = ({
                                                                                profile,
                                                                                toggleEditMode,
                                                                     }) => {

    const dispatch = useDispatch()

    const schema = yup.object().shape({
        fullName: yup.string().required('Required'),
        aboutMe: yup.string().max(300, 'The text is too long'),
        facebook: yup.string().url('Incorrect format. Please, enter a URL'),
        website: yup.string().url('Incorrect format. Please, enter a URL'),
        vk: yup.string().url('Incorrect format. Please, enter a URL'),
        twitter: yup.string().url('Incorrect format. Please, enter a URL'),
        instagram: yup.string().url('Incorrect format. Please, enter a URL'),
        youtube: yup.string().url('Incorrect format. Please, enter a URL'),
        github: yup.string().url('Incorrect format. Please, enter a URL'),
        mainLink: yup.string().url('Incorrect format. Please, enter a URL'),
        lookingForAJobDescription: yup.string().max(300, 'The text is too long'),
        lookingForAJob: yup.boolean(),
    })

    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe || 'none',
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            instagram: profile.contacts.instagram,
            youtube: profile.contacts.youtube,
            github: profile.contacts.github,
            mainLink: profile.contacts.mainLink,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription || 'none'
        },
        validationSchema: schema,
        onSubmit: values => {
            const data = {
                userId: profile.userId,
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription || 'none',
                fullName: values.fullName,
                aboutMe: values.aboutMe || 'none',
                contacts: {
                    github: values.github,
                    vk: values.vk,
                    facebook: values.facebook,
                    instagram: values.instagram,
                    twitter: values.twitter,
                    website: values.website,
                    youtube: values.youtube,
                    mainLink: values.mainLink
                }
            }
            console.log(data)
            toggleEditMode()
            dispatch(updateProfile(data))
        }
    })

    const {touched, errors} = formik

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
                    {touched.fullName && errors.fullName && <div>{errors.fullName}</div>}
                </div>
            </div>
        </div>
        <div>
            <h3>About me</h3>
            <p>{profile.aboutMe}</p>
            <textarea placeholder="Tell about yourself" {...formik.getFieldProps('aboutMe')}></textarea>
            {touched.aboutMe && errors.aboutMe && <div>{errors.aboutMe}</div>}
        </div>
        <div className={classes.contactsBlock}>
            <h3>Contacts</h3>
            <ul>
                {
                    Object.keys(profile.contacts).map((key) => {
                        return <>
                            <Contact key={key + 'Form'} title={key} value={profile.contacts[key]}/>
                            <input key={key + 'FormInput'} type="text" placeholder={key} {...formik.getFieldProps(key)}/>
                            {touched[key as ContactsListElementType] && errors[key as ContactsListElementType] && <div>{errors[key as ContactsListElementType]}</div>}
                        </>
                    })
                }
            </ul>
        </div>
        <div>
            Looking for a job: <input type="checkbox" checked={profile.lookingForAJob} {...formik.getFieldProps('lookingForAJob')}/>
            {touched.lookingForAJob && errors.lookingForAJob && <div>{errors.lookingForAJob}</div>}
        </div>
        <div>
            <h3>My professional skills</h3>
            <p>{profile.lookingForAJobDescription}</p>
            <textarea placeholder="Describe your skills" {...formik.getFieldProps('lookingForAJobDescription')}></textarea>
            {touched.lookingForAJobDescription && errors.lookingForAJobDescription && <div>{errors.lookingForAJobDescription}</div>}
        </div>
    </form>
}

const Contact: React.FC<ContactPropsType> = ({title, value}) => {
    return <li>{title}: {value || `Don't have one`}</li>
}