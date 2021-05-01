import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {actions} from "../../../redux/action-creators";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profile.posts,
    }
}

const {addPost} = actions

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;