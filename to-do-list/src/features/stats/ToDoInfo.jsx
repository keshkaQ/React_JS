import { useContext, useMemo } from "react";
import { TasksContext } from "@/entities/todo";
import styles from "./ToDoInfo.module.scss";

export default function ToDoInfo() {
  const { tasks, deleteAllTasks } = useContext(TasksContext);
  const total = tasks?.length ?? 0;
  const hasTasks = total > 0;
  const done = useMemo(() => {
    return tasks?.filter(({ isDone }) => isDone).length ?? 0;
  }, [tasks]);

  return (
    <div className={styles.info}>
      <div className={styles.totalTasks}>
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button
          className={styles.deleteAllButton}
          type="button"
          onClick={deleteAllTasks}
        >
          Delete all
        </button>
      )}
    </div>
  );
}
