import React from "react";
import { useDrag } from "react-dnd";

function DraggableTask({
  id,
  children,
}: {
  id: number;
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
      {children}
    </div>
  );
}

export { DraggableTask };
