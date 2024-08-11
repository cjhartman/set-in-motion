import { DraggableTask } from "./components/DraggableTask";
import { DroppableList } from "./components/DroppableList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const lists = [
    { id: 1, title: "To Do", tasks: [1, 2, 3] },
    { id: 2, title: "In Progress", tasks: [4, 5] },
    { id: 3, title: "Done", tasks: [6] },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Set In Motion</h1>
        <div>
          {lists.map((list) => (
            <DroppableList
              key={list.id}
              onDrop={() => console.log("Item Dropped")}
            >
              {list.tasks.map((taskId) => (
                <DraggableTask key={taskId} id={taskId}>
                  {taskId}
                </DraggableTask>
              ))}
            </DroppableList>
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
