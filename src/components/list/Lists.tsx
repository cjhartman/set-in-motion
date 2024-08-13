import { List } from "../../types/list";
import { DraggableTask } from "../dnd/DraggableTask";
import { DroppableList } from "../dnd/DroppableList";
import NewList from "./NewList";

export default function Lists({
  lists,
  isAddingCard,
  onListSaved,
}: {
  lists: List[];
  isAddingCard: boolean;
  onListSaved: () => void;
}) {
  const handleSaveCard = () => {
    onListSaved();
  };

  const handleCancelCard = () => {
    onListSaved();
  };

  return (
    <div>
      {isAddingCard && (
        <NewList onSave={handleSaveCard} onCancel={handleCancelCard}></NewList>
      )}

      {lists.map((list) => (
        <DroppableList
          title={list.title}
          key={list.id}
          onDrop={() => console.log("Item Dropped")}
        >
          {list.tasks.map((taskId) => (
            <DraggableTask title={taskId.title} key={taskId.id} id={taskId.id}>
              {taskId.id}
            </DraggableTask>
          ))}
        </DroppableList>
      ))}
    </div>
  );
}
