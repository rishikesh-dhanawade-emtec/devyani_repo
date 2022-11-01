import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        hotelAdded: {
            reducer(state, action) {
                state.push(action.payload)
            }, 
            prepare (name, address, contact, email, desc) {
                return {
                    payload:{
                        id: nanoid(),
                        name, 
                        address,
                        contact,
                        email,
                        desc
                    }
                }
            }
        },
        hotelUpdated(state, action) {
            const {id, name, address, contact, email, desc} = action.payload
            const existingHotel = state.find(hotel => hotel.id === id) 
            if(existingHotel) {
                existingHotel.name = name;
                existingHotel.address = address;
                existingHotel.contact = contact;
                existingHotel.email = email;
                existingHotel.desc = desc;
            }
        },
        hotelDeleted (state,action) {
            const {id} = action.payload;
            const existingHotel = state.find((hotel) => hotel.id === id);
            if(existingHotel) {
                return state.filter(hotel => hotel.id !== id);
            }
        }
    }
});

export const showHotels = (state) => state.hotels;

export const { hotelAdded, hotelUpdated, hotelDeleted } = hotelsSlice.actions;

export default hotelsSlice.reducer