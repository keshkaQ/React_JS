import { useContext } from "react";
import { ToDoItem, TasksContext } from "@/entities/todo";

export default function ToDoList(props) {
  const { styles } = props;
  const { tasks, visibleTasks, isLoading, loadError } = useContext(TasksContext);

  if (isLoading) {
    return <div className={styles.loadingMessage}>Loading tasks...</div>;
  }

  if (loadError) {
    return <div className={styles.errorMessage}>{loadError}</div>;
  }

  if (tasks.length === 0) {
    return <div className={styles.emptyMessage}>No tasks yet</div>;
  }

  if (visibleTasks.length === 0) {
    return <div className={styles.emptyMessage}>No tasks match your filters</div>;
  }

  return (
    <ul className={styles.list}>
      {visibleTasks.map((task) => (
        <ToDoItem key={task.id} {...task} />
      ))}
    </ul>
  );
}
