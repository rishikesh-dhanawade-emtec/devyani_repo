import { createSlice, nanoid } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        admin: [{id: 1, name: 'Admin', email: 'admin@gmail.com', password: 'admin'}],
    },
    reducers: {
        userAdded: {
                reducer (state, action) {
                    state.users.push(action.payload)
                },
                prepare (name, address, email, password, confirmPassword) {
                    return {
                        payload: {
                            id: nanoid(),
                            name, 
                            address,
                            email,
                            password,
                            confirmPassword,
                        }
                    }
                }
            },
        userChecked: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const showUsers = (state) => state.users.users;

export const showAdmin = (state) => state.users.admin;

export const { userAdded, userChecked } = usersSlice.actions;

export default usersSlice.reducer