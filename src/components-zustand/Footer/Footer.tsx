import { Item } from "../../types/globalTypes";
import { useItemsStore } from "../../store-zustand/store";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation()
  const items = useItemsStore((state) => state.items);
  const doneItems: Item[] = items.filter(item => item.done === true);
  const doneItemsPercent: number = (items.length > 0) ? (doneItems.length / items.length) * 100 : 0;
  return (
    <>
      <p className="mt-4">
        {items.length > 0 ?
          (doneItemsPercent !== 100) ?
            t('tasks.incomplete', {
              count: items.length,
              doneCount: doneItems.length,
              percent: Math.round(doneItemsPercent)
            }) :
            t('tasks.complete') : null}
      </p>
    </>
  );
}
