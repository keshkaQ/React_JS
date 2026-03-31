import {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useReducer,
} from "react";
import tasksAPI from "@/shared/api/tasks";

const normalizeTask = (task) => ({
  id: task.id,
  title: task.title ?? "Untitled task",
  description: task.description ?? "",
  category: task.category ?? "General",
  isDone: Boolean(task.isDone),
});

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL": {
      if (!Array.isArray(action.tasks)) return state;
      return action.tasks.map(normalizeTask);
    }
    case "ADD": {
      return [...state, normalizeTask(action.task)];
    }
    case "TOGGLE_COMPLETE": {
      const { id, isDone } = action;
      return state.map((task) => {
        return task.id === id ? { ...task, isDone } : task;
      });
    }
    case "DELETE": {
      return state.filter((task) => task.id !== action.id);
    }
    case "DELETE_ALL": {
      return [];
    }
    default: {
      return state;
    }
  }
};

const useTasks = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [disappearingTaskId, setDisappearingTaskId] = useState(null);
  const [appearingTaskId, setAppearingTaskId] = useState(null);

  const newTaskInputRef = useRef(null);

  const selectTask = useCallback((taskId) => {
    setSelectedTaskId(taskId);
  }, []);

  const deleteAllTasks = useCallback(async () => {
    const isConfirmed = confirm("Are you sure?");
    if (!isConfirmed) return;

    try {
      await tasksAPI.deleteAll(tasks);
      dispatch({ type: "DELETE_ALL" });
      setSelectedTaskId(null);
      setLoadError("");
    } catch {
      setLoadError("Could not delete all tasks.");
    }
  }, [tasks]);

  const deleteTask = useCallback(
    async (taskId) => {
      try {
        await tasksAPI.delete(taskId);
        setDisappearingTaskId(taskId);

        setTimeout(() => {
          dispatch({ type: "DELETE", id: taskId });
          setDisappearingTaskId(null);
          setSelectedTaskId((currentTaskId) => {
            return currentTaskId === taskId ? null : currentTaskId;
          });
        }, 450);
      } catch {
        setLoadError("Could not delete this task.");
      }
    },
    [setSelectedTaskId],
  );

  const toggleTaskCompleted = useCallback(async (taskId, isDone) => {
    try {
      await tasksAPI.toggleComplete(taskId, isDone);
      dispatch({ type: "TOGGLE_COMPLETE", id: taskId, isDone });
      setLoadError("");
    } catch {
      setLoadError("Could not update task status.");
    }
  }, []);

  const addTask = useCallback(async (taskData) => {
    const newTask = {
      title: taskData.title.trim(),
      description: taskData.description.trim(),
      category: taskData.category.trim(),
      isDone: false,
    };

    try {
      const addedTask = await tasksAPI.add(newTask);
      dispatch({ type: "ADD", task: addedTask });
      setSearchQuery("");
      setFilterStatus("all");
      setSelectedTaskId(addedTask.id);
      newTaskInputRef.current?.focus();
      setAppearingTaskId(addedTask.id);
      setTimeout(() => setAppearingTaskId(null), 450);
      setLoadError("");
      return true;
    } catch {
      setLoadError("Could not add a new task.");
      return false;
    }
  }, []);

  useEffect(() => {
    let isActive = true;

    const loadTasks = async () => {
      setIsLoading(true);
      setLoadError("");

      try {
        const serverTasks = await tasksAPI.getAll();
        if (!isActive) return;

        dispatch({ type: "SET_ALL", tasks: serverTasks });
      } catch {
        if (isActive) {
          setLoadError("Could not load tasks.");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
          newTaskInputRef.current?.focus();
        }
      }
    };

    loadTasks();

    return () => {
      isActive = false;
    };
  }, []);

  const visibleTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch =
        clearSearchQuery.length === 0 ||
        task.title.toLowerCase().includes(clearSearchQuery) ||
        task.description.toLowerCase().includes(clearSearchQuery);

      const matchesFilter =
        filterStatus === "all" ||
        (filterStatus === "done" && task.isDone) ||
        (filterStatus === "active" && !task.isDone);

      return matchesSearch && matchesFilter;
    });
  }, [filterStatus, searchQuery, tasks]);

  const selectedTask = useMemo(() => {
    return tasks.find((task) => task.id === selectedTaskId) ?? null;
  }, [tasks, selectedTaskId]);

  return {
    tasks,
    visibleTasks,
    deleteAllTasks,
    deleteTask,
    toggleTaskCompleted,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    selectedTaskId,
    selectedTask,
    selectTask,
    isLoading,
    loadError,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  };
};

export default useTasks;
