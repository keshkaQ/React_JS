import AddTaskForm from "./AddTaskForm";
import Button from "./Button";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function ToDo() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) return JSON.parse(savedTasks);
    return [
      { id: "task-1", title: "купить молоко", isDone: false },
      { id: "task-2", title: "погладить кота", isDone: false },
      { id: "task-3", title: "сделать дз", isDone: true },
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);
  const firstInCompleteTaskRef = useRef(null);
  const firstInCompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

  const deleteAllTasks = () => {
    const isConfirmed = confirm("Вы уверены?");
    if (isConfirmed) setTasks([]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompleted = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }
        return task;
      }),
    );
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current.focus();
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();
  }, []);

  const clearSearchQuery = searchQuery.trim().toLowerCase();
  const filteredTask =
    clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        newTaskInputRef={newTaskInputRef}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        addTask={addTask}
      ></AddTaskForm>
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      ></SearchTaskForm>
      <ToDoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      ></ToDoInfo>
      <Button
        onClick={() =>
          firstInCompleteTaskRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Показать первую невыполненную задачу
      </Button>

      <ToDoList
        firstInCompleteTaskRef={firstInCompleteTaskRef}
        firstInCompleteTaskId={firstInCompleteTaskId}
        filteredTask={filteredTask}
        onTaskCompleteChange={toggleTaskCompleted}
        onDeleteTaskButtonClick={deleteTask}
        tasks={tasks}
      ></ToDoList>
    </div>
  );
}
