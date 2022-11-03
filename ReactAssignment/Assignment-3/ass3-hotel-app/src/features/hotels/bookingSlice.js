import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        bookingAdded: {
            reducer(state, action) {
                state.push(action.payload)
            }, 
            prepare (checkInDate, checkInTime, table, hotelName, userName, hotelId, userId, msg) {
                return {
                    payload:{
                        id: nanoid(),
                        checkInDate, 
                        checkInTime, 
                        table, 
                        hotelName, 
                        userName,
                        hotelId, 
                        userId,
                        msg,
                    }
                }
            }
        },
        cancelBooking (state, action) {
            const {id, msg} = action.payload;
            const existingBooking = state.find(booking => booking.id === id)
            if(existingBooking) {
                existingBooking.id = id
                existingBooking.msg = msg
            }
        },
    }
}) 

export const bookingData = (state) => state.booking;

export const {bookingAdded, cancelBooking} = bookingSlice.actions;

export default bookingSlice.reducer;