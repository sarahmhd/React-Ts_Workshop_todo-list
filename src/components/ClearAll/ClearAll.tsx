import { useDispatch } from "react-redux";
import { deleteAll } from "../../store/features/ListSlice";
import { useTranslation } from "react-i18next";

export default function ClearAll() {

  const { t } = useTranslation()

  const dispatch = useDispatch()

  const handleDeleteAll = () => {
    dispatch(deleteAll())
  };

  return (
    <button className='clear-all w-32 h-10 bg-[#cda1a7] text-[#fff] uppercase' onClick={handleDeleteAll}>{t("clearAll")}</button>
  );
}
