import { Trash } from "phosphor-react";

import styles from "./styles.module.scss";

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

interface TaskProps {
  onDelete: () => void;
  onTaskDone: () => void;
  task: Task;
}

export function Task({ task, onDelete, onTaskDone }: TaskProps) {
  return (
    <div className={`${styles.task} ${task.done ? styles.taskDone : ""}`}>
      <input type="checkbox" checked={task.done} onChange={onTaskDone} />
      <p>{task.text}</p>
      <Trash size={20} color="#808080" onClick={onDelete} />
    </div>
  );
}
