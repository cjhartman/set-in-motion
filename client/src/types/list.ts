import { Task } from "./task";

export interface List {
  id?: number;
  title: string;
  description?: string;
  color?: string;
  rank?: number;
  tasks?: Task[];
}
