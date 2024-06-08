import { Item as ItemInterface } from "../../types/globalTypes";
import Item from "../Item";

export type ListItemsProps = {
  items: ItemInterface[];
  handleItemDone: (id: string | number) => void;
  handleDelete: (id: string | number) => void;
};
export default function ListItems({ items, handleItemDone, handleDelete }: ListItemsProps) {
  return (
    <ul className='list list-none flex flex-col w-full gap-4 py-8'>
      {
        items.map(item => <Item key={item.id} item={item} handleItemDone={handleItemDone} handleDelete={handleDelete} />)
      }
    </ul>
  );
}
