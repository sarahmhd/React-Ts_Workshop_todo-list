import { Item } from "../../types/globalTypes";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export default function Footer() {

  const items = useSelector((state: RootState) => state.items.items);
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
