import { DragDropContext, DropResult } from '@hello-pangea/dnd';

import AddItemForm from './components-zustand/AddItemForm';
import ClearAll from './components-zustand/ClearAll';
import Footer from './components-zustand/Footer';
import Header from './components-zustand/Header';
import ListItems from './components-zustand/ListItems';
// import { RootState } from './store/store';
// import { itemsAtom } from './atoms/items-atom';
import { reorderItems } from './store-zustand/features/ListSlice';
import { useItemsStore } from './store-zustand/store';

// import { reorderItems } from './store/features/ListSlice';
// import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  // const items = useSelector((state: RootState) => state.items.items);
  // const items = itemsAtom.useValue()
  const items = useItemsStore((state)=> state.items)
  // const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    // dispatch(reorderItems({
    //   startIndex: source.index,
    //   endIndex: destination.index,
    // }));

    // itemsAtom.reorderItems(source.index, destination.index);
    // itemsAtom.refresh()
    
    reorderItems({
      startIndex: source.index,
      endIndex: destination.index,
    })
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
