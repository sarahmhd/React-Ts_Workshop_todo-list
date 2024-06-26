import { Droppable } from "@hello-pangea/dnd";
import Item from "../Item";
import { itemsAtom } from "../../atoms/items-atom";
import { useTranslation } from "react-i18next";

const ListItems: React.FC = () => {
  const { t } = useTranslation()
  const items = itemsAtom.value;

  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          className='list list-none flex flex-col w-full gap-4 py-8'
          style={{ minHeight: '35vh' }}
        >
          {items.length > 0 ? (
            items.map((item, idx) => <Item key={item.id} item={item} index={idx} />)
          ) : (
            <p className="message text-[#e08692] text-lg m-3 mt-8 pe-8 text-center">
              {t("listEmpty")}
            </p>
          )}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default ListItems;
