import { useEffect, useState } from "react";
import { List } from "../../types/list";
import { DroppableList } from "../dnd/DroppableList";
import NewList from "./NewList";
import axios from "axios";
import "./Lists.scss";
import Button from "../ui/button/Button";
import { DraggableTask } from "../dnd/DraggableTask";

const LISTS_API_URL = "http://localhost:4000/api/lists";
// const TASKS_API_URL = "http://localhost:4000/api/tasks";

export default function Lists({
  isAddingCard,
  onListSaved,
  onListCancel,
}: {
  isAddingCard: boolean;
  onListSaved: () => void;
  onListCancel: () => void;
}) {
  const [newTasks, setNewTasks] = useState<{
    [listId: number]: boolean;
  }>({});

  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(LISTS_API_URL);
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
      const response = await axios.post(LISTS_API_URL, newList);
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

  const handleAddNewTask = (listId: number) => {
    setNewTasks({
      ...newTasks,
      [listId]: true,
    });
  };

  const handleCancelNewTask = (listId: number) => {
    setNewTasks({
      ...newTasks,
      [listId]: false,
    });
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
          {list?.tasks?.map((taskId) => (
            <DraggableTask
              title={taskId.title}
              key={taskId.id}
              id={taskId.id}
              listId={list?.id as number}
            ></DraggableTask>
          ))}
          <>
            {newTasks[list.id as number] && (
              <DraggableTask
                listId={list?.id as number}
                addNewTask={newTasks[list?.id as number] || false}
                onCancel={handleCancelNewTask}
              ></DraggableTask>
            )}
            <Button
              text="Add Task"
              btnStyle="outline"
              icon="fa-plus"
              onClick={() => handleAddNewTask(list.id as number)}
            ></Button>
          </>
        </DroppableList>
      ))}
    </div>
  );
}
