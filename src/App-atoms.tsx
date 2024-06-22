import { DragDropContext, DropResult } from '@hello-pangea/dnd';

import AddItemForm from './components-atoms/AddItemForm';
import ClearAll from './components-atoms/ClearAll';
import Footer from './components-atoms/Footer';
import Header from './components-atoms/Header';
import ListItems from './components-atoms/ListItems';
import { itemsAtom } from './atoms/items-atom';


const App: React.FC = () => {
  const items = itemsAtom.useValue()

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    itemsAtom.reorderItems(source.index, destination.index);
    itemsAtom.refresh()

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
