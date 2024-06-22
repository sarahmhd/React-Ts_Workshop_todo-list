import { PlainLocalStorageDriver, setCacheConfigurations } from "@mongez/cache";

import { Item } from "../types/globalTypes";
import { atom } from "@mongez/react-atom";
import cache from "@mongez/cache";

setCacheConfigurations({
    driver: new PlainLocalStorageDriver(),
});

type ItemsAtomActions = {
    refresh:()=> void;
    addItem: (item:Item)=> void;
    removeItem:(id:number|string)=>void;
    changeItemDone:(id:number|string)=>void;
    editItem:(id:number|string, value:string)=>void;
    reorderItems:(startIndex:number,endIndex: number )=>void;
    deleteAll:()=>void;
}

export const itemsAtom = atom<Item[],ItemsAtomActions>({
    key: 'items',
    default: cache.get('items-atoms', []),
    beforeUpdate(items) {
        cache.set("items-atoms", items);
        return items;
    },
    actions: {
        refresh:()=>{
            itemsAtom.update([...itemsAtom.value])
        },
        addItem: (item: Item) => {
            const items = itemsAtom.value;
            items.push(item);
            itemsAtom.update([...items])
        },
        removeItem:(id:number|string)=>{
            itemsAtom.update(itemsAtom.value.filter(item=> item.id !== id))
        },
        changeItemDone:(id:number|string)=> {
            itemsAtom.update(itemsAtom.value.map(item=> item.id===id ? {...item , done:!item.done}:item))
        },
        editItem: (id:number|string, value:string)=>{
            itemsAtom.update(itemsAtom.value.map(item=> item.id===id ? {...item , value:value}:item))
        },
        reorderItems:(startIndex: number, endIndex: number )=> {
            const [reorderedItem] = itemsAtom.value.splice(startIndex,1);
            itemsAtom.value.splice(endIndex,0,reorderedItem)
        },
        deleteAll:()=>{
            itemsAtom.update([])
        }
    }

})