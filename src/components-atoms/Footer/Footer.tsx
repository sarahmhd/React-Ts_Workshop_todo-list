import { Item } from "../../types/globalTypes";
import { itemsAtom } from "../../atoms/items-atom";

export default function Footer() {

  const items = itemsAtom.value;
  const doneItems: Item[] = items.filter(item => item.done === true);
  const doneItemsPercent: number = (items.length > 0) ? (doneItems.length / items.length) * 100 : 0;
  return (
    <>
      <p className="mt-4">
        {items.length > 0 ?
          (doneItemsPercent !== 100) ?
            ` 📃 You have ${items.length} tasks on your list, and you already finished ${doneItems.length} 
            (${Math.round(doneItemsPercent)}%)` :
            'You Finished all tasks, Congrats 🎉🎉' : null}
      </p>
    </>
  );
}
