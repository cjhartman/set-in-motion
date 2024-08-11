import React from "react";

export function List({ children }: { children: React.ReactNode }) {
  return <div className="list">{children}</div>;
}
