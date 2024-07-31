export type TypedColumn = "todo" | "inprogress" | "underreview" | "finished";
export type TaskPriority = "low" | "medium" | "urgent";

export interface Task {
  [x: string]: any;
  $id: string;
  title: string;
  description?: string;
  status: TypedColumn;
  priority?: TaskPriority;
  deadline?: Date;
  createdAt: Date;
  createdDaysAgo?: number;
  user: string; // Assuming user ID is stored as a string
}

export interface Column {
  id: TypedColumn;
  tasks: Task[];
}

export interface BoardState {
  columns: Map<TypedColumn, Column>;
  addTask: (
    title: string,
    description: string,
    status: TypedColumn,
    priority: TaskPriority,
    user: string,
    deadline?: Date
  ) => void;
  getTodosGroupedByColumn: () => Map<TypedColumn, Column>;
}
