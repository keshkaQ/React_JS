import "./style.css";
import {
  initialTasks,
  addTasks,
  removeTasks,
  sortTasks,
  getTaskCount,
} from "./data";
import { renderTasksList, updateTaskCounter, updateTaskOrder } from "./render";

let tasks = [...initialTasks];
let ordinalList = [...initialTasks];
let isSorted = false;

const addBtn = document.querySelector(".add-btn button");
const sortBtn = document.querySelector(".sort-btn button");
const themeBtn = document.querySelector(".theme-btn button");
const ol = document.querySelector("ol");
const taskCountElement = document.querySelector(".task-count");

function handleDelete(index) {
  removeTasks(tasks, index);
  ordinalList = [...tasks];
  renderTasksList(ol, tasks, handleDelete);
  updateTaskCounter(taskCountElement, getTaskCount(tasks));
}

renderTasksList(ol, tasks, handleDelete);
updateTaskCounter(taskCountElement, getTaskCount(tasks));

// Обработчик клика по кнопке
addBtn.addEventListener("click", () => {
  const taskText = prompt("Введите новую задачу:");

  if (taskText && taskText.trim()) {
    addTasks(tasks, taskText.trim());
    ordinalList = [...tasks];
    isSorted = false;
    renderTasksList(ol, tasks, handleDelete);
    updateTaskCounter(taskCountElement, getTaskCount(tasks));
  }
});

sortBtn.addEventListener("click", () => {
  if (!isSorted) {
    tasks = sortTasks(tasks);
    isSorted = true;
    sortBtn.textContent = "Вернуть порядок";
    sortBtn.classList.add("sorted");
  } else {
    tasks = [...ordinalList];
    isSorted = false;
    sortBtn.textContent = "Сортировать";
    sortBtn.classList.remove("sorted");
  }
  updateTaskOrder(ol, tasks, handleDelete);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDarkTheme = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");

  themeBtn.textContent = isDarkTheme ? "Светлая тема" : "Темная тема";
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "☀️ Свет";
  }
});
