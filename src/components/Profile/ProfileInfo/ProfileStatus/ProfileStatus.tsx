import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

type ProfileStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    shouldComponentUpdate(nextProps: Readonly<PropsType>, nextState: Readonly<ProfileStateType>): boolean {
        return nextProps !== this.props || nextState !== this.state
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.props.status)
    }

    onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{editMode: boolean, status: string}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode && <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                }
                {
                    this.state.editMode && <div><input autoFocus onBlur={this.deactivateEditMode} onChange={(e) => this.onStatusChangeHandler(e)} value={this.state.status}/></div>
                }
            </>
        )
    }
}

export default ProfileStatus