import {createSlice} from '@reduxjs/toolkit'
import { IHat } from 'shared/models/interfaces'

export interface IHatsState {
    hatList:IHat[],
    hatSelectedID:number|null
}
const initialState:IHatsState = {
    hatList: [ {color:"green",id:1,name:"Cowboy" },{color:"red",id:2,name:"Strat"},{color:"black",id:3,name:"StarBoy"}],
    hatSelectedID:null
}

export const hatsSlice = createSlice({
    name:'hats',
    initialState,
    reducers:{
        setHats:  (state,action) =>  {state.hatList = action.payload},
        setSelectedID:  (state,action) =>  {state.hatSelectedID = action.payload}
    }
})


export const {setHats,setSelectedID} = hatsSlice.actions
export default hatsSlice.reducer