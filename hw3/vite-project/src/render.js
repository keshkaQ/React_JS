export function createTaskElement(text, index, onDelete) {
  const li = document.createElement("li");
  li.dataset.index = index;
  li.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    onDelete(index);
  });

  li.appendChild(deleteButton);
  return li;
}

export function renderTasksList(ol, tasks, onDelete) {
  ol.innerHTML = "";

  if (tasks.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "Нет задач. Добавь первую";
    ol.appendChild(emptyMessage);
    return;
  }
  tasks.forEach((task, index) => {
    const li = createTaskElement(task, index, onDelete);
    ol.appendChild(li);
  });
}

export function updateTaskCounter(countElement, count) {
  countElement.textContent = `Всего задач: ${count}`;
}

export function updateTaskOrder(ol, tasks, onDelete) {
  renderTasksList(ol, tasks, onDelete);
}
