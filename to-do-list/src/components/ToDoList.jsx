import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  const {
    tasks,
    filteredTask,
    firstInCompleteTaskRef,
    firstInCompleteTaskId,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props;
  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTask?.length === 0;
  if (!hasTasks) {
    return <div className="todo__empty-message">Нет задач</div>;
  }
  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Задачи не найдены</div>;
  }
  return (
    <ul className="todo__list">
      {filteredTask ??
        tasks.map((task) => (
          <ToDoItem
            className="todo__item"
            onDeleteTaskButtonClick={onDeleteTaskButtonClick}
            onTaskCompleteChange={onTaskCompleteChange}
            key={task.id}
            ref={
              task.id === firstInCompleteTaskId ? firstInCompleteTaskRef : null
            }
            {...task}
          />
        ))}
    </ul>
  );
}
