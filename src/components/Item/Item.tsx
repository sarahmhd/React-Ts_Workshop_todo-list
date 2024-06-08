import { Item as ItemInterface } from "../../types/globalTypes";
import { X } from 'lucide-react';


export type ItemProps = {
  item: ItemInterface,
  handleItemDone: (id: string | number) => void;
  handleDelete: (id: string | number) => void;

};
export default function Item({ item, handleItemDone, handleDelete }: ItemProps) {
  return (
    <li key={item.id} className={`list-item items-center w-full gap-2 ${item.done ? 'done' : ''}`}>
      <input type='checkbox' checked={item.done} id={`checkbox-${item.id}`} onChange={() => handleItemDone(item.id)} />
      <label className='cursor-pointer capitalize text-[#ddbc76]' htmlFor={`checkbox-${item.id}`}>{item.value}</label>
      <button className='del-btn transition-all hover:text-red-700' onClick={() => handleDelete(item.id)}>
        <X />
      </button>
    </li>
  );
}
