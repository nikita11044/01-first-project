import profileReducer from "../redux/profile-reducer";
import {actions} from "../redux/action-creators";
import {v1} from "uuid";

test('new post should be added', () => {
    let action = actions.addPost('test text')

    let startState = {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: "It's my first post", likesCount: 11}
        ],
        profile: {
            aboutMe: '',
            contacts: {},
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 2,
            photos: {
                small: '',
                large: ''
            }
        },
        status: ''
    }

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(3)
    expect(newState.posts[0].message).toBe('test text')
})