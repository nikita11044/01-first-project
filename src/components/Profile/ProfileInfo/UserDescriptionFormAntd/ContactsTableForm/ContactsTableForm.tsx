import React from "react";
import {
    FacebookOutlined,
    GithubOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    YoutubeOutlined
} from "@ant-design/icons";
import VkIcon from "../../../../common/VkIcon/VkIcon";
import WebsiteIcon from "../../../../common/WebsiteIcon/WebsiteIcon";
import {Table} from "antd";

type ContactsTablePropsType = {
    contactsData: { [key: string]: string }
}

export const ContactsTableForm: React.FC<ContactsTablePropsType> = ({contactsData}) => {

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

    const tableData = Object.keys(contactsData).map((key, index) => {
        const icon = contactIconHandler(key)

        const description = contactsData[key] ? <a href={contactsData[key]}>View</a> : 'none'

        return {key: index, icon: icon, title: key, description: description}
    })

    return (
        <Table dataSource={tableData} showHeader={false} pagination={false}>
            <Table.Column title="Icon"
                          dataIndex="icon"
                          key="icon"
            ></Table.Column>
            <Table.Column title="Title"
                          dataIndex="title"
                          key="title"
            ></Table.Column>
            <Table.Column title="Description"
                          dataIndex="description"
                          key="description"
            ></Table.Column>
        </Table>
    )
}