import React from "react";
import {updateProfile, UserProfileType} from "../../../../redux/profile-reducer";
import userDescriptionClasses from "./../UserDescription/UserDescription.module.css";
import defaultUserAvatar from "../../../../assets/default-user-avatar.jpg";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import * as yup from 'yup'
import {Button, Checkbox, Divider, Dropdown, Form, Input, Layout, Menu, Table, Tabs, Typography} from "antd";
import {ContactsTable} from "../UserDescription/ContactsTable/ContactsTable";
import TextArea from "antd/es/input/TextArea";
import {ContactsTableForm} from "./ContactsTableForm/ContactsTableForm";
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

export const UserDescriptionFormAntd: React.FC<UserDescriptionFormPropsType> = ({
                                                                                    profile,
                                                                                    toggleEditMode,
                                                                                }) => {

    const dispatch = useDispatch()

    // const schema = yup.object().shape({
    //     fullName: yup.string().required('Required'),
    //     aboutMe: yup.string().max(300, 'The text is too long'),
    //     facebook: yup.string().url('Incorrect format. Please, enter a URL'),
    //     website: yup.string().url('Incorrect format. Please, enter a URL'),
    //     vk: yup.string().url('Incorrect format. Please, enter a URL'),
    //     twitter: yup.string().url('Incorrect format. Please, enter a URL'),
    //     instagram: yup.string().url('Incorrect format. Please, enter a URL'),
    //     youtube: yup.string().url('Incorrect format. Please, enter a URL'),
    //     github: yup.string().url('Incorrect format. Please, enter a URL'),
    //     mainLink: yup.string().url('Incorrect format. Please, enter a URL'),
    //     lookingForAJobDescription: yup.string().max(300, 'The text is too long'),
    //     lookingForAJob: yup.boolean(),
    // })

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

        const input = <Form.Item
            style={{margin: '0'}}
            rules={[
                {
                    type: 'url',
                    message: 'Incorrect format. Please, enter a URL'
                }
            ]}
        ><Input
            placeholder={profile.contacts[key]} {...formik.getFieldProps(key)}/></Form.Item>

        return {key: index, icon: icon, title: key, input: input}
    })

    const {TabPane} = Tabs

    return <Form onFinish={formik.handleSubmit}>
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
                    <Form.Item className={userDescriptionClasses.descriptionBlock_text} rules={[
                        {
                            max: 300,
                            message: 'The text is too long'
                        }
                    ]}>
                        <TextArea showCount maxLength={300} {...formik.getFieldProps('aboutMe')}/>
                    </Form.Item>
                </Typography>
                <Typography>
                    <Divider orientation="center" style={{borderTopColor: '#00000054'}}>My skills</Divider>
                    <Form.Item className={userDescriptionClasses.descriptionBlock_text} rules={[
                        {
                            max: 300,
                            message: 'The text is too long'
                        }
                    ]}>
                        <TextArea showCount
                                  maxLength={300} {...formik.getFieldProps('lookingForAJobDescription')} />
                    </Form.Item>
                </Typography>
                <Form.Item style={ {display: 'flex', alignSelf: 'center'} }>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </div>
            <div
                className={userDescriptionClasses.descriptionBlock + '' + userDescriptionClasses.descriptionBlockRight}>
                <Typography className={userDescriptionClasses.userNameBlock}>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: 'User name required'
                            }
                        ]}>
                        <Input style={{maxWidth: '200px'}}
                               placeholder={profile.fullName} {...formik.getFieldProps('fullName')}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox {...formik.getFieldProps('lookingForAJob')}>Looking for a job</Checkbox>
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