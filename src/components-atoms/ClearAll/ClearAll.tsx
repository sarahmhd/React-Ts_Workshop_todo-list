import { useTranslation } from "react-i18next";
import { itemsAtom } from "../../atoms/items-atom";

export default function ClearAll() {

  const { t } = useTranslation()

  const handleDeleteAll = () => {
    itemsAtom.deleteAll()
  };

  return (
    <button className='clear-all w-32 h-10 bg-[#cda1a7] text-[#fff] uppercase' onClick={handleDeleteAll}>{t("clearAll")}</button>
  );
}
