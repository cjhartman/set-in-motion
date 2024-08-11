import React from "react";
import { useDrop } from "react-dnd";

function DroppableList({
  children,
  onDrop,
}: {
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
    <div ref={drop} className={`list ${canDrop ? "can-drop" : ""}`}>
      {children}
    </div>
  );
}

export { DroppableList };
