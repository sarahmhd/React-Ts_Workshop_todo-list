import { DragDropContext, DropResult } from '@hello-pangea/dnd';

import AddItemForm from './components/AddItemForm';
import ClearAll from './components/ClearAll';
import Footer from './components/Footer';
import Header from './components/Header';
import ListItems from './components/ListItems';
import { RootState } from './store/store';
import { reorderItems } from './store/features/ListSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
  const items = useSelector((state: RootState) => state.items.items);
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    dispatch(reorderItems({
      startIndex: source.index,
      endIndex: destination.index,
    }));
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
