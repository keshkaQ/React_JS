import { useContext } from "react";
import { TasksContext } from "@/entities/todo";
import styles from "./ToDoItem.module.scss";
import { highlightCaseInsensitive } from "@/shared/utils/highlight";

function ToDoItem(props) {
  const { className = "", id, title, category, isDone } = props;

  const {
    deleteTask,
    toggleTaskCompleted,
    disappearingTaskId,
    appearingTaskId,
    searchQuery,
    selectedTaskId,
    selectTask,
  } = useContext(TasksContext);

  const highlightedTitle = highlightCaseInsensitive(title, searchQuery);
  const isSelected = selectedTaskId === id;

  return (
    <li
      className={`${styles.todoItem} ${className} ${
        disappearingTaskId === id ? styles.isDisappearing : ""
      } ${appearingTaskId === id ? styles.isAppearing : ""} ${
        isSelected ? styles.isSelected : ""
      }`}
    >
      <input
        className={styles.checkbox}
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={({ target }) => toggleTaskCompleted(id, target.checked)}
      />
      <label className="visually-hidden" htmlFor={id}>
        {title}
      </label>

      <button
        className={`${styles.titleButton} ${isDone ? styles.isDone : ""}`}
        type="button"
        onClick={() => selectTask(id)}
      >
        <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
      </button>

      <span className={styles.categoryBadge}>{category}</span>

      <button
        className={styles.deleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={() => deleteTask(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
}

export default ToDoItem;
