import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {Tabs} from "antd";

export type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem: React.FC<DialogItemPropsType> = React.memo(({name, id}) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${id}`}>
                {name}
            </NavLink>
        </div>
    );
})

export default DialogItem;