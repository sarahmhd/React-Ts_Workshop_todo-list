import { useItemsStore } from "../../store-zustand/store";

export default function ClearAll() {

  const deleteAll = useItemsStore((state) => state.deleteAll)

  const handleDeleteAll = () => {
    deleteAll();
  };

  return (
    <button className='clear-all w-32 h-10 bg-[#cda1a7] text-[#fff] uppercase' onClick={handleDeleteAll}>clear all</button>
  );
}
