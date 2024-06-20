import { Check, Pencil, Pointer, X } from 'lucide-react';
import { changeItemDone, deleteItem, editItem } from "../../store/features/ListSlice";
import { useRef, useState } from 'react';

import { Draggable } from 'react-beautiful-dnd';
import { Item as ItemInterface } from "../../types/globalTypes";
import { useDispatch } from "react-redux";

export type ItemProps = {
  item: ItemInterface,
  index: number
};
export default function Item({ item, index }: ItemProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editVal, setEditVal] = useState<string>(item.value);
  const dispatch = useDispatch();

  const handleItemDone = (id: number | string) => {
    dispatch(changeItemDone(id))
  };

  const handleDelete = (id: number | string) => {
    dispatch(deleteItem(id))
  };

  const handleEdit = (id: number | string, editVal: string) => {
    setIsEdit(!isEdit);
    dispatch(editItem({ id, editVal }))
  };

  return (
    <Draggable index={index} draggableId={item.id.toString()}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className={`list-item items-center w-full gap-2 ${item.done ? 'done' : ''}`}
        >
          <input
            type='checkbox'
            checked={item.done}
            id={`checkbox-${item.id}`}
            onChange={() => handleItemDone(item.id)}
          />
          {(isEdit && !item.done) ? (
            <input
              className='px-3 focus:shadow-none focus:outline-none'
              onKeyDown={(e) => e.key === 'Enter' && handleEdit(item.id, editVal)}
              autoFocus
              type='text'
              value={editVal}
              onChange={(e) => setEditVal(e.target.value)}
            />
          ) : (
            <label className='cursor-pointer capitalize text-[#222]' htmlFor={`checkbox-${item.id}`}>
              {item.value}
            </label>
          )}
          <div className="actions flex items-center gap-2">
            <button
              disabled={item.done}
              className='edit-btn transition-all hover:text-[#ddbc76]'
              onClick={() => handleEdit(item.id, editVal)}
            >
              {(isEdit && !item.done) ? <Check /> : <Pencil style={{ width: '20px' }} />}
            </button>
            <button
              className='del-btn transition-all hover:text-red-700'
              onClick={() => handleDelete(item.id)}
            >
              <X />
            </button>
          </div>
        </li>
      )}
    </Draggable>
  );
}
