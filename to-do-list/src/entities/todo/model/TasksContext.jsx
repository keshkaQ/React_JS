import { TasksContext } from "./context";
import useTasks from "./useTasks";

export function TasksProvider(props) {
  const { children } = props;
  const {
    tasks,
    visibleTasks,
    deleteAllTasks,
    deleteTask,
    toggleTaskCompleted,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    isLoading,
    loadError,
    selectedTaskId,
    selectedTask,
    selectTask,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const value = {
    tasks,
    visibleTasks,
    deleteAllTasks,
    deleteTask,
    toggleTaskCompleted,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    isLoading,
    loadError,
    selectedTaskId,
    selectedTask,
    selectTask,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
