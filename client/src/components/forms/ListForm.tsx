import React from "react";
import { List } from "../../types/list";

const ListForm = ({ list, onCancel }: { list?: List; onCancel: any }) => {
  return (
    <div>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ListForm;
