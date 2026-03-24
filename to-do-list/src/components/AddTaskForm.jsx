import Field from "./Field";
import Button from "./Button";

export default function AddTaskForm(props) {
  const {
    addTask,
    newTaskInputRef,
    newTaskTitle, setNewTaskTitle
  } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        ref={newTaskInputRef}
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
      ></Field>
      <Button type="submit">Add</Button>
    </form>
  );
}
