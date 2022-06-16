import { PlusCircle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface CreateTaskButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateTaskButton({ ...props }: CreateTaskButton) {
  return (
    <button type="button" className={styles.createTaskButton} {...props}>
      Criar <PlusCircle size={16} color="#F2F2F2" />
    </button>
  );
}
