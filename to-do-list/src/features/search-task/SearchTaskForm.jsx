import { useContext } from "react";
import Field from "@/shared/ui/Field";
import { TasksContext } from "@/entities/todo";
import styles from "./SearchTaskForm.module.scss";

export default function SearchTaskForm() {
  const { searchQuery, setSearchQuery } = useContext(TasksContext);

  return (
    <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
      <Field
        className={styles.field}
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
}
