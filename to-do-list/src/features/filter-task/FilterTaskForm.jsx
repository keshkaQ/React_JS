import { useContext } from "react";
import { TasksContext } from "@/entities/todo";
import styles from "./FilterTaskForm.module.scss";

export default function FilterTaskForm() {
  const { filterStatus, setFilterStatus } = useContext(TasksContext);

  return (
    <div className={styles.filter}>
      <label className={styles.label} htmlFor="task-filter">
        Filter by status
      </label>
      <select
        className={styles.select}
        id="task-filter"
        value={filterStatus}
        onChange={(event) => setFilterStatus(event.target.value)}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}
