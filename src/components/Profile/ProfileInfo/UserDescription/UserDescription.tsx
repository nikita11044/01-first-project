import React, {ChangeEvent, createRef, useRef} from "react";
import defaultUserAvatar from "../../../../assets/default-user-avatar.jpg";
import {ProfileStatusFunctional} from "../ProfileStatus/ProfileStatusFunctional";
import {savePhoto, UserProfileType} from "../../../../redux/profile-reducer";
import classes from "./UserDescription.module.css";
import {Button, Divider, Dropdown, Layout, Menu, Tabs, Typography} from "antd";
import MyPosts from "../../MyPosts/MyPosts";
import {ContactsTable} from "./ContactsTable/ContactsTable";
import MyPostsContainer from "../../MyPosts/MyPostsContainer";

type UserDescriptionPropsType = {
    profile: UserProfileType
    onMainPhotoSelected: (e: ChangeEvent<HTMLInputElement>) => void
    isOwner: boolean
    status: string | null
    updateStatus: (newStatus: string) => void
    toggleEditMode: () => void
}

const {TabPane} = Tabs

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
            <Menu.Item key="1" style={{textAlign: 'center'}}><Button onClick={toggleEditMode}>Edit</Button></Menu.Item>
            <Menu.Item key="2">
                <Button onClick={() => inputRef && inputRef.current && inputRef.current.click()}>
                    Upload Photo
                    <input ref={inputRef} hidden type="file" onChange={onMainPhotoSelected}/>
                </Button>
            </Menu.Item>
        </Menu>
    )

    return <div className={classes.userDescription}>
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
                {isOwner && <Typography.Text underline>Right click on photo to edit profile</Typography.Text>}
            </div>
            <Typography>
                <Divider orientation="center" style={{borderTopColor: '#00000054'}}>About me</Divider>
                <Typography.Paragraph
                    className={classes.descriptionBlock_text}>{profile.aboutMe}</Typography.Paragraph>
            </Typography>
            <Typography>
                <Divider orientation="center" style={{borderTopColor: '#00000054'}}>My skills</Divider>
                <Typography.Paragraph
                    className={classes.descriptionBlock_text}>{profile.lookingForAJobDescription || 'none'}</Typography.Paragraph>
            </Typography>
        </div>
        <div className={classes.descriptionBlock + '' + classes.descriptionBlockRight}>
            <Typography className={classes.userNameBlock}>
                <Typography.Title level={1}>{profile.fullName}</Typography.Title>
                <ProfileStatusFunctional status={status} updateStatus={updateStatus}/>
                {profile.lookingForAJob && <Typography.Text type="success" strong>Open to work!</Typography.Text>}
            </Typography>
            <div className={classes.contactsBlock}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Contacts" key="1">
                        <ContactsTable contactsData={profile.contacts}/>
                    </TabPane>
                    <TabPane tab={isOwner && "My posts" || 'Posts'} key="2">
                        <MyPostsContainer isOwner={isOwner}/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </div>
}