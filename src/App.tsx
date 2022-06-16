import { ClipboardText } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { CreateTaskButton } from "./components/CreateTaskButton";
import { CreateTaskInput } from "./components/CreateTaskInput";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from "./styles/App.module.scss";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "12",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, reiciendis minima eligendi facilis officia nesciunt dicta possimus dignissimos ipsum cupiditate iusto nulla sunt illo aspernatur culpa vero, impedit natus quo?",
      done: false,
    },
    {
      id: "13",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, reiciendis minima eligendi facilis officia nesciunt dicta possimus dignissimos ipsum cupiditate iusto nulla sunt illo aspernatur culpa vero, impedit natus quo?",
      done: true,
    },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const tasksDone = tasks.reduce((acc, task) => {
    return task.done ? acc + 1 : acc;
  }, 0);

  const handleNewTaskTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value);
  };

  const handleAddNewTask = () => {
    if (!newTaskText) return;

    const newTask: Task = {
      id: String(tasks.length),
      done: false,
      text: newTaskText,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasksList = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasksList);
  };

  const handleSetTaskDone = (id: string) => {
    const updatedTasksList = tasks.map((task) => {
      if (task.id === id) {
        task.done = true;
      }

      return task;
    });
    setTasks(updatedTasksList);
  };

  const handleSetTaskUndone = (id: string) => {
    const updatedTasksList = tasks.map((task) => {
      if (task.id === id) {
        task.done = false;
      }

      return task;
    });
    setTasks(updatedTasksList);
  };

  const handleTaskStatus = (task: Task) => {
    if (task.done) {
      handleSetTaskUndone(task.id);
    } else {
      handleSetTaskDone(task.id);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.app}>
        <div className={styles.createTask}>
          <CreateTaskInput onChange={handleNewTaskTextChange} />
          <CreateTaskButton onClick={handleAddNewTask} />
        </div>

        <section className={styles.tasks}>
          <header>
            <strong>
              Tarefas criadas <span>{tasks.length}</span>
            </strong>
            <strong>
              Concluídas{" "}
              <span>
                {tasksDone} de {tasks.length}
              </span>
            </strong>
          </header>

          {tasks.length === 0 ? (
            <div className={styles.empty}>
              <ClipboardText size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            <div>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  onDelete={() => handleDeleteTask(task.id)}
                  task={task}
                  onTaskDone={() => handleTaskStatus(task)}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
