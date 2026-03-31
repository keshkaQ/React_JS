import { useContext } from "react";
import { TasksContext } from "@/entities/todo";
import styles from "./TaskDetails.module.scss";

export default function TaskDetails() {
  const { selectedTask } = useContext(TasksContext);

  if (!selectedTask) {
    return (
      <section className={styles.details}>
        <h2 className={styles.title}>Task details</h2>
        <p className={styles.placeholder}>Select a task to see full information.</p>
      </section>
    );
  }

  return (
    <section className={styles.details}>
      <h2 className={styles.title}>{selectedTask.title}</h2>

      <div className={styles.row}>
        <span className={styles.label}>Description</span>
        <span className={styles.value}>
          {selectedTask.description || "No description provided"}
        </span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Category</span>
        <span className={styles.value}>{selectedTask.category}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Status</span>
        <span className={styles.value}>
          {selectedTask.isDone ? "Done" : "Active"}
        </span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>ID</span>
        <span className={styles.value}>{selectedTask.id}</span>
      </div>
    </section>
  );
}
