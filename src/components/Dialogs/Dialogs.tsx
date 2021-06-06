import React from "react";
import DialogItem from "./DialogItem/DialogItem";
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

        const dialogElements = dialogs.map(el => {
            return <Tabs.TabPane tab={el.name} key={el.id}>
                <div className={classes.messagesWrapper}>
                    {
                        messages[el.id].map(el => {
                            return <MessageItem key={el.id} message={el.message}/>
                        })
                    }
                </div>
                <div className={classes.addMessageFormWrapper}>
                    <AddMessageForm dialogId={el.id} sendMessage={sendMessage} placeholder={'Enter you message'}/>
                </div>
            </Tabs.TabPane>
        })


        return (
            <Tabs tabPosition={'left'}>
                {
                    dialogElements
                }
            </Tabs>
        )

        // return (
        //     <div className={classes.dialogs}>
        //         <div className={classes.dialogsItems}>
        //             {
        //                 dialogElements
        //             }
        //         </div>
        //         <div className={classes.messages}>
        //             <div>{messagesElements}</div>
        //             <div>
        //                 <AddMessageForm sendMessage={sendMessage} placeholder={'Enter you message'}/>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
)
export default Dialogs;