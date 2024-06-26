import { ChangeEvent, FormEvent, useState } from "react";

import { Item as ItemInterface } from "../../types/globalTypes";
import { itemsAtom } from "../../atoms/items-atom";
import { useTranslation } from "react-i18next";

const AddItemForm = () => {

  const { i18n, t } = useTranslation()

  const [item, setItem] = useState<ItemInterface>({ id: 0, value: '', done: false });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!item.value.trim()) return;
    itemsAtom.addItem(item)
    setItem({ id: 0, value: '', done: false })
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const id = crypto.randomUUID()
    setItem({ id, value, done: false })
  };

  return (
    <form onSubmit={handleSubmit} className='flex relative w-full'>
      <input className='w-full focus:outline-none' type="text" placeholder={t("inputPlaceholder")} value={item.value} onChange={handleChange} />
      <button type='submit' className={`absolute top-0 h-full w-28 bg-[#cda1a7] text-[#fff] uppercase ${i18n.language === 'en' ? 'right-0' : 'left-0'}`}>{t('add')}</button>
    </form>
  );
}


export default AddItemForm