import { useEffect, useState } from "react";
import { List } from "../../types/list";
import { DraggableTask } from "../dnd/DraggableTask";
import { DroppableList } from "../dnd/DroppableList";
import NewList from "./NewList";
import axios from "axios";
import "./Lists.scss";

const API_URL = "http://localhost:4000/api/lists";

export default function Lists({
  isAddingCard,
  onListSaved,
  onListCancel,
}: {
  isAddingCard: boolean;
  onListSaved: () => void;
  onListCancel: () => void;
}) {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(API_URL);
        setLists(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors gracefully, e.g., display an error message
      }
    };

    fetchLists();
  }, []);

  const handleSaveList = async (newList: List) => {
    try {
      const response = await axios.post(API_URL, newList);
      setLists([...lists, response.data]); // Add new list to state
      onListSaved();
    } catch (error) {
      console.error(error);
      // Handle errors gracefully, e.g., display an error message
    }
  };

  const handleCancelList = () => {
    onListCancel();
  };

  return (
    <div className="lists">
      {isAddingCard && (
        <NewList onSave={handleSaveList} onCancel={handleCancelList}></NewList>
      )}

      {lists.map((list) => (
        <DroppableList
          title={list.title}
          key={list.id}
          onDrop={() => console.log("Item Dropped")}
        >
          {list.tasks?.map((taskId) => (
            <DraggableTask title={taskId.title} key={taskId.id} id={taskId.id}>
              {taskId.id}
            </DraggableTask>
          ))}
        </DroppableList>
      ))}
    </div>
  );
}
