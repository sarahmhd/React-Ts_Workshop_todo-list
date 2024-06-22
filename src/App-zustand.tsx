import { DragDropContext, DropResult } from '@hello-pangea/dnd';

import AddItemForm from './components-zustand/AddItemForm';
import ClearAll from './components-zustand/ClearAll';
import Footer from './components-zustand/Footer';
import Header from './components-zustand/Header';
import ListItems from './components-zustand/ListItems';
import { useItemsStore } from './store-zustand/store';

const App: React.FC = () => {

  const items = useItemsStore((state) => state.items)
  const reorderItems = useItemsStore((state) => state.reorderItems)

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
  
    reorderItems(
      source.index,
      destination.index,
    )
  };


  return (
    <div className='todos flex flex-col items-center gap-4 my-12 mx-auto w-full px-10 sm:w-2/5 sm:p-0 '>
      <DragDropContext onDragEnd={onDragEnd}>
        <Header />
        <AddItemForm />
        <ListItems />
        {items.length > 0 && <ClearAll />}
        <Footer />
      </DragDropContext>
    </div>
  )
}

export default App;
