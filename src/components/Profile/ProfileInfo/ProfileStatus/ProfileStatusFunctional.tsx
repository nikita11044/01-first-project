import React, {ChangeEvent, useState} from "react";

type ProfilePropsType = {
    status: string | null
    updateStatus: (newStatus: string) => void
}

export const ProfileStatusFunctional: React.FC<ProfilePropsType> = React.memo((props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatusValue] = useState<string | null>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        if (status) {
            props.updateStatus(status)
        }
    }

    const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)
    }

    return (
        <>
            {
                !editMode && <div><span onDoubleClick={activateEditMode}>{props.status || '----'}</span></div>
            }
            {
                editMode && <div><input autoFocus onBlur={deactivateEditMode} onChange={(e) => onStatusChangeHandler(e)}
                                        value={status || ''}/></div>
            }
        </>
    )
})