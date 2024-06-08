export type ClearAllProps = {
  handleDeleteAll: () => void
};
export default function ClearAll({ handleDeleteAll }: ClearAllProps) {
  return (
    <button className='clear-all w-32 h-10 bg-[#cda1a7] text-[#fff] uppercase' onClick={handleDeleteAll}>clear all</button>
  );
}
