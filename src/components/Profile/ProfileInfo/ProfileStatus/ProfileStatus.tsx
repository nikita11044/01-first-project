import React from "react";

type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode && <div><span onDoubleClick={this.toggleEditMode}>{this.props.status}</span></div>
                }
                {
                    this.state.editMode && <div><input autoFocus onBlur={this.toggleEditMode} value={this.props.status}/></div>
                }
            </>
        )
    }
}

export default ProfileStatus