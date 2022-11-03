import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from '../features/hotels/bookingSlice';
import hotelsSlice from '../features/hotels/hotelsSlice';
import usersSlice from '../features/users/usersSlice';

export default configureStore({
    reducer: {
        hotels: hotelsSlice,
        users: usersSlice,
        booking: bookingSlice,
    }
})