import { v1 } from "uuid";
import { profileReducer, ProfilePageType } from "./profile-reducer";

test('correct post text should be added', () => {
    let newPostMessage = 'new mes';
    const startState: ProfilePageType = {
        postText: '',
        postsData:
            [
                { id: v1(), message: 'hey buddy!', likesCount: 0 },
                { id: v1(), message: 'how is it going?', likesCount: 0 }
            ]
    }

    const endState = profileReducer(startState, { type: 'ADD-POST', postText: newPostMessage })

    expect(endState.postsData.length).toBe(3);
    expect(endState.postsData[2].message).toBe(newPostMessage)
})

test('correct post should change its name', () => {
    let newPostText = 'this is something new'
    const startState: ProfilePageType = {
        postText: '',
        postsData:
            [
                { id: v1(), message: 'hey buddy!', likesCount: 0 },
                { id: v1(), message: 'how is it going?', likesCount: 0 }
            ]
    }

    const endState = profileReducer(startState, { type: 'CHANGE-POST-TEXT', newText: newPostText })
})