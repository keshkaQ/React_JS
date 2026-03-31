import AddTaskForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import FilterTaskForm from "@/features/filter-task";
import TaskDetails from "@/features/task-details";
import ToDoInfo from "@/features/stats";
import { ToDoList } from "@/entities/todo";
import styles from "./ToDo.module.scss";

export default function ToDo() {
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>Task Catalog</h1>

      <AddTaskForm />

      <div className={styles.toolbar}>
        <SearchTaskForm />
        <FilterTaskForm />
      </div>

      <ToDoInfo />

      <div className={styles.content}>
        <ToDoList styles={styles} />
        <TaskDetails />
      </div>
    </div>
  );
}
