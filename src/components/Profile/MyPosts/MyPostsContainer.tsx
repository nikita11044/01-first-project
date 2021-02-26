import {ChangeEvent, Dispatch} from 'react';
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ActionTypes} from "../../../redux/store";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(UpdatePostTextAC(e.currentTarget.value))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;