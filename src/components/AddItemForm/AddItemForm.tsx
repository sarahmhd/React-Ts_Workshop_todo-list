import { ChangeEvent, FormEvent } from "react";

import { Item as ItemInterface } from "../../types/globalTypes";

export type AddItemsProps = {
  item: ItemInterface;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddItemForm = ({ item, handleSubmit, handleChange }: AddItemsProps) => {

  return (
    <form onSubmit={handleSubmit} className='flex relative w-full'>
      <input className='w-full focus:outline-none' type="text" placeholder="Add Your Task..." value={item.value} onChange={handleChange} />
      <button type='submit' className='absolute right-0 top-0 h-full w-28 bg-[#cda1a7] text-[#fff] uppercase'>add</button>
    </form>
  );
}


export default AddItemForm