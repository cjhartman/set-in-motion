import { DraggableTask } from "./components/dnd/DraggableTask";
import { DroppableList } from "./components/dnd/DroppableList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import HeaderNav from "./components/header/HeaderNav";
import PageLayout from "./components/page-layout/PageLayout";

function App() {
  const lists = [
    {
      id: 1,
      title: "To Do",
      tasks: [
        { title: "Title 1", id: 1 },
        { title: "Title 2", id: 2 },
        { title: "Title 3", id: 3 },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      tasks: [
        { title: "Title 4", id: 4 },
        { title: "Title 5", id: 5 },
      ],
    },
    { id: 3, title: "Done", tasks: [{ title: "Title 6", id: 6 }] },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <HeaderNav></HeaderNav>
      <PageLayout>
        <div>
          {lists.map((list) => (
            <DroppableList
              title={list.title}
              key={list.id}
              onDrop={() => console.log("Item Dropped")}
            >
              {list.tasks.map((taskId) => (
                <DraggableTask
                  title={taskId.title}
                  key={taskId.id}
                  id={taskId.id}
                >
                  {taskId.id}
                </DraggableTask>
              ))}
            </DroppableList>
          ))}
        </div>
      </PageLayout>
    </DndProvider>
  );
}

export default App;
