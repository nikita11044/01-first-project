import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${id}`}>
                {name}
            </NavLink>
        </div>
    );
}

export default DialogItem;