import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import HeaderNav from "./components/header/HeaderNav";
import PageLayout from "./components/page-layout/PageLayout";
import Button from "./components/ui/button/Button";
import "./App.scss";
import { useState } from "react";
import Lists from "./components/list/Lists";

function App() {
  const initialLists = [
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

  const [lists] = useState(initialLists);
  const [isAddingCard, setIsAddButtonDisabled] = useState(false);

  const addList = () => {
    setIsAddButtonDisabled(true);
  };

  const handleListSaved = () => {
    setIsAddButtonDisabled(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <HeaderNav></HeaderNav>
      <PageLayout>
        <div className="add-list">
          <Button
            text="Add List"
            btnStyle="primary"
            icon="fa-plus"
            onClick={addList}
            disabled={isAddingCard}
          ></Button>
        </div>
        <Lists
          lists={lists}
          isAddingCard={isAddingCard}
          onListSaved={handleListSaved}
        ></Lists>
      </PageLayout>
    </DndProvider>
  );
}

export default App;
