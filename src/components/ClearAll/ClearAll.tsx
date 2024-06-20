import { useDispatch } from "react-redux";
import { deleteAll } from "../../store/features/ListSlice";

export default function ClearAll() {

  const dispatch = useDispatch()

  const handleDeleteAll = () => {
    dispatch(deleteAll())
  };

  return (
    <button className='clear-all w-32 h-10 bg-[#cda1a7] text-[#fff] uppercase' onClick={handleDeleteAll}>clear all</button>
  );
}
