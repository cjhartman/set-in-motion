import React from "react";
import { useDrop } from "react-dnd";
import "./DroppableList.scss";
import Button from "../ui/button/Button";

function DroppableList({
  title,
  children,
  onDrop,
}: {
  title: string;
  children: React.ReactNode;
  onDrop: (id: string) => void;
}) {
  const [{ canDrop }, drop] = useDrop({
    accept: "task",
    drop: (item: { id: string }) => onDrop(item?.id),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div>
      <div className="list-header">
        <h3>{title}</h3>
        <Button btnStyle="outline" icon="fa-ellipsis"></Button>
      </div>

      <div ref={drop} className={`list ${canDrop ? "can-drop" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export { DroppableList };
