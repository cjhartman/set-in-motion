import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import HeaderNav from "./components/header/HeaderNav";
import PageLayout from "./components/page-layout/PageLayout";
import Button from "./components/ui/button/Button";
import "./App.scss";
import { useState } from "react";
import Lists from "./components/list/Lists";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [isAddingCard, setIsAddButtonDisabled] = useState(false);

  const addList = () => {
    setIsAddButtonDisabled(true);
  };

  const handleListSaved = () => {
    setIsAddButtonDisabled(false);
  };

  const handleListCancel = () => {
    setIsAddButtonDisabled(false);
  };

  return (
    <Provider store={store}>
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
            isAddingCard={isAddingCard}
            onListSaved={handleListSaved}
            onListCancel={handleListCancel}
          ></Lists>
        </PageLayout>
      </DndProvider>
    </Provider>
  );
}

export default App;
