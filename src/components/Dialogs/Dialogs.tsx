import React, {useEffect} from "react";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsType, MessageType} from "../../redux/dialogs-reducer";
import {AddMessageForm} from "../common/AddMessageForm/AddMessageForm";
import {Tabs} from "antd";

export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: { [key: string]: Array<MessageType> }
    sendMessage: (message: string, receiverId?: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = React.memo(({dialogs, messages, sendMessage}) => {

    useEffect(() => {
        const wrapper = document.getElementById('wrapper')

        if (wrapper) {
            wrapper.scrollTo(0, wrapper.scrollHeight)
        }

    }, [messages])

    const dialogElements = dialogs.map(el => {
        return <Tabs.TabPane tab={el.name} key={el.id}>
            <div id="wrapper" className={classes.messagesWrapper}>
                {
                  messages[el.id].length !== 0
                  ? messages[el.id].map(el => {
                      return <MessageItem key={el.id} message={el.message}/>
                    })
                  :  <p>Waiting for your first message!'</p>
                }
            </div>
            <div className={classes.addMessageFormWrapper}>
                <AddMessageForm dialogId={el.id} sendMessage={sendMessage} placeholder={'Enter you message'}/>
            </div>
        </Tabs.TabPane>
    })

    return (<Tabs tabPosition={'left'}>{dialogElements}</Tabs>)
}
)

export default Dialogs;