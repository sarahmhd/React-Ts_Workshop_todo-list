import { Droppable } from "@hello-pangea/dnd";
import Item from "../Item";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const ListItems: React.FC = () => {
  const items = useSelector((state: RootState) => state.items.items);

  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          className='list list-none flex flex-col w-full gap-4 py-8'
        >
          {items.length > 0 ? (
            items.map((item, idx) => <Item key={item.id} item={item} index={idx} />)
          ) : (
            <p className="message text-[#e08692] text-lg m-3 mt-8 pe-8 text-center">
              Your todo list is currently empty. Start adding tasks to get organized!
            </p>
          )}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default ListItems;
