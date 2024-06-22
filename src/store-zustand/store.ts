import { createJSONStorage, persist } from 'zustand/middleware'

import { Item } from '../types/globalTypes';
import { create } from 'zustand'

interface ItemsState {
  items:Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number | string) => void;
  changeItemDone: (id: number | string) => void;
  editItem: (id: number | string, value: string) => void;
  reorderItems: (startIndex: number, endIndex: number) => void;
  deleteAll: () => void;
}

export const useItemsStore = create<ItemsState>()(persist((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items:state.items.filter(item=> item.id !== id) })),
  changeItemDone: (id) => set((state) => ({ items:state.items.map(item=> item.id === id ? {...item, done:!item.done}: item) })),
  editItem: (id,value) => set((state) => ({  items:state.items.map(item=> item.id === id ? {...item, value: value}: item) })),
  reorderItems: (startIndex,endIndex) => set((state) => {
    const items = Array.from(state.items)
    const [reorderedItem] = items.splice(startIndex,1) ;
    items.splice(endIndex,0,reorderedItem);
    return { items };
  }),
  deleteAll: () => set({ items: [] }),
}),
    {
      name: 'items', 
      storage: createJSONStorage(() => sessionStorage), 
    },
))