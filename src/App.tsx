import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'

import AddItemForm from './components/AddItemForm';
import ClearAll from './components/ClearAll';
import Header from './components/Header';
import { Item } from './types/globalTypes';
import ListItems from './components/ListItems';

const App: FC = () => {
  const storedItems = localStorage.getItem('items');

  const [item, setItem] = useState<Item>({ id: '', value: '', done: false });
  const [items, setItems] = useState<Item[]>(storedItems ? JSON.parse(storedItems) : []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = crypto.randomUUID()
    setItem({ id, value, done: false })
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!item.value) return;
    setItems([...items, item]);
    setItem({ id: '', value: '', done: false });
    console.log(items)
  };

  const handleItemDone = (id: string | number) => {
    setItems(items => items.map(item => item.id === id ? { ...item, done: !item.done } : item))
  };

  const handleDelete = (id: string | number) => {
    setItems(items => items.filter(item => item.id !== id))
  };

  const handleDeleteAll = () => {
    setItems([])
  };

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [item, items]);

  return (
    <div className='todos flex flex-col items-center gap-4 my-12 mx-auto w-full px-10 sm:w-2/5 sm:p-0 '>
      <Header />

      <AddItemForm item={item} handleChange={handleChange} handleSubmit={handleSubmit} />

      <ListItems items={items} handleItemDone={handleItemDone} handleDelete={handleDelete} />

      <ClearAll handleDeleteAll={handleDeleteAll} />

    </div>
  )
}

export default App
