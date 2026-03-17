export const initialTasks = [
  "Покормить кота",
  "Сходить в магазин",
  "Убраться дома",
];

export function addTasks(tasks, text) {
  tasks.push(text);
}

export function removeTasks(tasks, index) {
  tasks.splice(index, 1);
}
export function getTasks(tasks) {
  return [...tasks];
}

export function sortTasks(tasks) {
  return tasks.sort((a, b) => a.localeCompare(b, "ru"));
}

export function getTaskCount(tasks) {
  return tasks.length;
}
