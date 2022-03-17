import { UsersPageType } from "./redux"
import { usersReducer } from "./users-reducer"

test('should follow the correct user', () => {
    let _id = 3;

    const startState: UsersPageType = {
        users: [
            { name: 'Shubert', id: 1, photos: { small: '', large: '' }, status: 'Hey guys', followed: true },
            { name: 'Mozart', id: 2, photos: { small: '', large: '' }, status: 'Salieri seems to be a nice guy', followed: false },
            { name: 'Beethoven', id: _id, photos: { small: '', large: '' }, status: 'Guys, I cannot hear anything!!', followed: false },
        ]
    }

    const endState = usersReducer(startState, { type: 'FOLLOW-USER', userId: _id })

    expect(endState.users[2].id).toBe(3)
    expect(endState.users[2].followed).toBe(true)
    //проверка, что в другом месте нигде не полетело
    expect(endState.users[0].followed).toBe(true)
    expect(endState.users[1].followed).toBe(false)
})


test('should unfollow the correct user', () => {
    let _id = 1;

    const startState: UsersPageType = {
        users: [
            { name: 'Shubert', id: _id, photos: { small: '', large: '' }, status: 'Hey guys', followed: true },
            { name: 'Mozart', id: 2, photos: { small: '', large: '' }, status: 'Salieri seems to be a nice guy', followed: false },
            { name: 'Beethoven', id: 3, photos: { small: '', large: '' }, status: 'Guys, I cannot hear anything!!', followed: false },
        ]
    }

    const endState = usersReducer(startState, { type: 'UNFOLLOW-USER', userId: _id })

    expect(endState.users[0].id).toBe(1)
    expect(endState.users[0].followed).toBe(false)
    expect(endState.users[1].followed).toBe(false)
    expect(endState.users[2].followed).toBe(false)
})