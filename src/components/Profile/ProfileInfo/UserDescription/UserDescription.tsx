import React, {ChangeEvent, createRef, useRef} from "react";
import defaultUserAvatar from "../../../../assets/default-user-avatar.jpg";
import {ProfileStatusFunctional} from "../ProfileStatus/ProfileStatusFunctional";
import {savePhoto, UserProfileType} from "../../../../redux/profile-reducer";
import classes from "./UserDescription.module.css";
import {Button, Checkbox, Divider, Dropdown, Layout, Menu, Typography, Upload} from "antd";

type UserDescriptionPropsType = {
    profile: UserProfileType
    onMainPhotoSelected: (e: ChangeEvent<HTMLInputElement>) => void
    isOwner: boolean
    status: string | null
    updateStatus: (newStatus: string) => void
    toggleEditMode: () => void
}

type ContactPropsType = {
    title: string
    value: string
}

const {Header, Content, Footer, Sider} = Layout;

export const UserDescription: React.FC<UserDescriptionPropsType> = ({
                                                                        profile,
                                                                        onMainPhotoSelected,
                                                                        isOwner,
                                                                        status,
                                                                        updateStatus,
                                                                        toggleEditMode
                                                                    }) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const editUserDescriptionMenu = (
        <Menu>
            <Menu.Item key="1" style={ {textAlign: 'center'} }><Button onClick={toggleEditMode}>Edit</Button></Menu.Item>
            <Menu.Item key="2">
                <Button onClick={() => inputRef && inputRef.current && inputRef.current.click()}>
                    Upload Photo
                    <input ref={inputRef} hidden type="file" onChange={onMainPhotoSelected}/>
                </Button>
            </Menu.Item>
        </Menu>
    )

    return <>
        <Content className={classes.userDescription}>
            <div className={classes.descriptionBlock + ' ' + classes.descriptionBlockLeft}>
                <div className={classes.imgWrapper}>
                    {isOwner &&
                    <Dropdown overlay={editUserDescriptionMenu} trigger={['contextMenu']}>
                        <img className={classes.userAvatar} src={profile.photos.large || defaultUserAvatar}
                             alt="user-avatar"/>
                    </Dropdown>
                    || <img className={classes.userAvatar} src={profile.photos.large || defaultUserAvatar}
                           alt="user-avatar"/>
                    }
                    <Typography.Text underline>Right click on photo to edit profile</Typography.Text>
                </div>
                <Typography>
                    <Divider orientation="center">About me</Divider>
                    <Typography.Paragraph
                        className={classes.descriptionBlock_text}>{profile.aboutMe}</Typography.Paragraph>
                </Typography>
                <Typography>
                    <Divider orientation="center">My skills</Divider>
                    <Typography.Paragraph
                        className={classes.descriptionBlock_text}>{profile.lookingForAJobDescription || 'none'}</Typography.Paragraph>
                </Typography>
            </div>
            <div className={classes.descriptionBlock + '' + classes.descriptionBlockRight}>
                <Typography className={classes.userNameBlock}>
                    <Typography.Title level={1}>{profile.fullName}</Typography.Title>
                    <ProfileStatusFunctional status={status} updateStatus={updateStatus}/>
                    {!profile.lookingForAJob && <Typography.Text type="success" strong>Open to work!</Typography.Text>}
                </Typography>
                <Typography className={classes.contactsBlock}>
                    <Divider orientation="left">Contacts</Divider>
                    <ul>
                        {
                            Object.keys(profile.contacts).map(key => {
                                return <>
                                    <Contact key={key} title={key} value={profile.contacts[key]}/>
                                </>
                            })
                        }
                    </ul>
                </Typography>
            </div>
        </Content>
    </>
}

const Contact: React.FC<ContactPropsType> = ({title, value}) => {
    return <li>{title}: {value || `Don't have one`}</li>
}