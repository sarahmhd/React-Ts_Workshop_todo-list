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
        }
    },
})


// Action creators are generated for each case reducer function
export const { addItem } = ListSlice.actions

export const userSelector = (state: RootState) => state.items;

export default ListSlice.reducer


