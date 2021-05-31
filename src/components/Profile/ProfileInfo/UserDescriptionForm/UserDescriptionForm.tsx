import React from "react";
import {updateProfile, UserProfileType} from "../../../../redux/profile-reducer";
import userDescriptionClasses from "./../UserDescription/UserDescription.module.css";
import defaultUserAvatar from "../../../../assets/default-user-avatar.jpg";
import {useDispatch} from "react-redux";
import {Button, Checkbox, Divider, Form, Input, Table, Tabs, Typography} from "antd";
import TextArea from "antd/es/input/TextArea";
import {
    FacebookOutlined,
    GithubOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    YoutubeOutlined
} from "@ant-design/icons";
import VkIcon from "../../../common/VkIcon/VkIcon";
import WebsiteIcon from "../../../common/WebsiteIcon/WebsiteIcon";

type UserDescriptionFormPropsType = {
    profile: UserProfileType
    toggleEditMode: () => void
}

type FormValuesType = {
    userId: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    aboutMe: string,
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}

export const UserDescriptionForm: React.FC<UserDescriptionFormPropsType> = ({
                                                                                    profile,
                                                                                    toggleEditMode,
                                                                                }) => {

    const dispatch = useDispatch()

    const {userId, fullName, contacts, aboutMe, lookingForAJob, lookingForAJobDescription} = profile
    const {facebook, website, vk, twitter, instagram, youtube, github, mainLink} = contacts
    const initialValues = {
        lookingForAJob: lookingForAJob,
        lookingForAJobDescription: lookingForAJobDescription,
        fullName: fullName,
        aboutMe: aboutMe,
        github: github,
        vk: vk,
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        website: website,
        youtube: youtube,
        mainLink: mainLink
    }

    const onFinish = (values: FormValuesType) => {
        const data = {
            userId: userId,
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

    const contactIconHandler = (title: string) => {
        switch (title) {
            case 'facebook':
                return <FacebookOutlined/>
            case 'vk':
                return <VkIcon/>
            case 'website':
                return <WebsiteIcon/>
            case 'twitter':
                return <TwitterOutlined/>
            case 'instagram':
                return <InstagramOutlined/>
            case 'youtube':
                return <YoutubeOutlined/>
            case 'github':
                return <GithubOutlined/>
            case 'mainLink':
                return <LinkedinOutlined/>
        }
    }

    const tableData = Object.keys(profile.contacts).map((key, index) => {
        const icon = contactIconHandler(key)

        const input = <Form.Item name={key}
            style={{margin: '0'}}
            rules={[
                {
                    type: 'url',
                    message: 'Incorrect format. Please, enter a URL'
                }
            ]}
        ><Input/></Form.Item>

        return {key: index, icon: icon, title: key, input: input}
    })

    const {TabPane} = Tabs

    return <Form initialValues={initialValues} onFinish={onFinish}>
        <div className={userDescriptionClasses.userDescription}>
            <div
                className={userDescriptionClasses.descriptionBlock + ' ' + userDescriptionClasses.descriptionBlockLeft}>
                <div className={userDescriptionClasses.imgWrapper}>
                    <img className={userDescriptionClasses.userAvatar}
                         src={profile.photos.large || defaultUserAvatar}
                         alt="user-avatar"/>
                </div>
                <Typography>
                    <Divider orientation="center" style={{borderTopColor: '#00000054'}}>About me</Divider>
                    <Form.Item name="aboutMe" className={userDescriptionClasses.descriptionBlock_text} rules={[
                        {
                            max: 300,
                            message: 'The text is too long'
                        }
                    ]}>
                        <TextArea showCount maxLength={300}/>
                    </Form.Item>
                </Typography>
                <Typography>
                    <Divider orientation="center" style={{borderTopColor: '#00000054'}}>My skills</Divider>
                    <Form.Item name="lookingForAJobDescription" className={userDescriptionClasses.descriptionBlock_text} rules={[
                        {
                            max: 300,
                            message: 'The text is too long'
                        }
                    ]}>
                        <TextArea showCount maxLength={300}/>
                    </Form.Item>
                </Typography>
                <Form.Item style={{display: 'flex', alignSelf: 'center'}}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </div>
            <div
                className={userDescriptionClasses.descriptionBlock + '' + userDescriptionClasses.descriptionBlockRight}>
                <Typography className={userDescriptionClasses.userNameBlock}>
                    <Form.Item
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'User name required'
                            }
                        ]}>
                        <Input style={{maxWidth: '200px'}}
                               placeholder={profile.fullName}/>
                    </Form.Item>
                    <Form.Item name="lookingForAJob" valuePropName="checked">
                        <Checkbox>Looking for a job</Checkbox>
                    </Form.Item>
                </Typography>
                <div className={userDescriptionClasses.contactsBlock}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Contacts" key="1">
                            <Table dataSource={tableData} showHeader={false} pagination={false}>
                                <Table.Column title="Icon"
                                              dataIndex="icon"
                                              key="icon"
                                ></Table.Column>
                                <Table.Column title="Title"
                                              dataIndex="title"
                                              key="title"
                                ></Table.Column>
                                <Table.Column title="Input"
                                              dataIndex="input"
                                              key="input"
                                ></Table.Column>
                            </Table>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    </Form>
}