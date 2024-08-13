import React from "react";
import { useDrag } from "react-dnd";
import "./DraggableTask.scss";

function DraggableTask({
  id,
  title,
  children,
}: {
  id: number;
  title: string;
  children: React.ReactNode;
}) {
  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`task   
      ${isDragging ? "dragging" : ""}`}
    >
      <div>{title}</div>
      {children}
    </div>
  );
}

export { DraggableTask };
