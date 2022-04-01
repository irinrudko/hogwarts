import { v1 } from "uuid";
import { profileReducer, ProfilePageType } from "./profile-reducer";

it('should add correct post text', () => {
    let newPostMessage = 'new mes';
    const startState: ProfilePageType = {
        postText: '',
        postsData:
            [
                { id: v1(), message: 'hey buddy!', likesCount: 0 },
                { id: v1(), message: 'how is it going?', likesCount: 0 }
            ],
        profile: {
            userId: 2,
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            photos: {
                small: '',
                large: '',
            }
        }
    }


    const endState = profileReducer(startState, { type: 'ADD-POST', postText: newPostMessage })

    expect(endState.postsData.length).toBe(3);
    expect(endState.postsData[2].message).toBe(newPostMessage)
})

it('should change correct post text', () => {
    let newPostText = 'this is something new'
    const startState: ProfilePageType = {
        postText: '',
        postsData:
            [
                { id: v1(), message: 'hey buddy!', likesCount: 0 },
                { id: v1(), message: 'how is it going?', likesCount: 0 }
            ],
        profile: {
            userId: 2,
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            photos: {
                small: '',
                large: '',
            }
        }
    }

    const endState = profileReducer(startState, { type: 'CHANGE-POST-TEXT', newText: newPostText })
})