import { ChangeEvent, FormEvent, useState } from "react";

import { Item as ItemInterface } from "../../types/globalTypes";
import { useItemsStore } from "../../store-zustand/store";

const AddItemForm = () => {

  const [item, setItem] = useState<ItemInterface>({ id: 0, value: '', done: false });

  const addItem = useItemsStore((state)=> state.addItem)


  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!item.value.trim()) return;
    addItem(item)
    setItem({ id: 0, value: '', done: false })
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const id = crypto.randomUUID()
    setItem({ id, value, done: false })
  };

  return (
    <form onSubmit={handleSubmit} className='flex relative w-full'>
      <input className='w-full focus:outline-none' type="text" placeholder="Add Your Task..." value={item.value} onChange={handleChange} />
      <button type='submit' className='absolute right-0 top-0 h-full w-28 bg-[#cda1a7] text-[#fff] uppercase'>add</button>
    </form>
  );
}


export default AddItemForm