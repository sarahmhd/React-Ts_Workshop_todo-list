import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Item } from '../../types/globalTypes'
import { RootState } from '../store'

export interface ItemsState {
    items: Item[]
}

const initialState: ItemsState = {
    items: [],
}

export const ListSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            // state.items = [...state.items, action.payload]
            state.items.push(action.payload);
        },
        changeItemDone: (state, action: PayloadAction<number|string>) => {
            state.items = state.items.map(item=> item.id === action.payload ? { ...item, done: !item.done } : item)
        },
        deleteItem: (state,action:PayloadAction<number|string>)=>{
            state.items = state.items.filter(item=>item.id !== action.payload)
        },
        deleteAll: (state)=>{
            state.items = []
        },
        editItem:(state,action:PayloadAction<{id:number|string, editVal:string}>)=>{
            state.items = state.items.map(item=> item.id === action.payload.id ? { ...item, value: action.payload.editVal } : item)
        },
        reorderItems: (state, action: PayloadAction<{ startIndex: number; endIndex: number }>) => {
            const [reorderedItem] = state.items.splice(action.payload.startIndex, 1);
            state.items.splice(action.payload.endIndex, 0, reorderedItem);
        },
    },
})


// Action creators are generated for each case reducer function
export const { addItem , changeItemDone , deleteItem , deleteAll , editItem , reorderItems} = ListSlice.actions

export const userSelector = (state: RootState) => state.items;

export default ListSlice.reducer;


