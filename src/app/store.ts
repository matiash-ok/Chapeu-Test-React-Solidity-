import {configureStore} from '@reduxjs/toolkit'
import hatsReducer from 'features/hats/hatsSlice'


export const store = configureStore({
    reducer:{
        hats:hatsReducer  
    }
})

export type IRootState = ReturnType<typeof store.getState>