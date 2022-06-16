import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface CreateTaskInput extends InputHTMLAttributes<HTMLInputElement> {}

export function CreateTaskInput({ ...props }: CreateTaskInput) {
  return (
    <input
      {...props}
      className={styles.createTaskInput}
      type="text"
      placeholder="Adicione uma nova tarefa"
    />
  );
}
