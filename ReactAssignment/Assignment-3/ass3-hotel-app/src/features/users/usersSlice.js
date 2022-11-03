import { createSlice, nanoid } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        admin: [{ id: 1, name: 'Admin', email: 'admin@gmail.com', password: 'admin' }],
    },
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.users.push(action.payload)
            },
            prepare(name, city, email, contact, password, confirmPassword) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        city,
                        email,
                        contact,
                        password,
                        confirmPassword,
                    }
                }
            }
        },
        userUpdate(state, action) {
            const { id, name, city, email, contact } = action.payload
            const existingUser = state.users.find(user => user.id === id)
            if (existingUser) {
                existingUser.name = name;
                existingUser.city = city;
                existingUser.email = email;
                existingUser.contact = contact;
            }
        },
        userChecked: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const showUsers = (state) => state.users.users;

export const showAdmin = (state) => state.users.admin;

export const { userAdded, userChecked, userUpdate } = usersSlice.actions;

export default usersSlice.reducer