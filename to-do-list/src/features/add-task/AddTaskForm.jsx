import { useCallback, useContext, useMemo, useState } from "react";
import Button from "@/shared/ui/Button";
import Field from "@/shared/ui/Field";
import { TasksContext } from "@/entities/todo";
import styles from "./AddTaskForm.module.scss";

const defaultFormState = {
  title: "",
  description: "",
  category: "",
};

const defaultFormErrors = {
  title: "",
  description: "",
  category: "",
};

export default function AddTaskForm() {
  const { addTask, newTaskInputRef } = useContext(TasksContext);

  const [formState, setFormState] = useState(defaultFormState);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);

  const validateForm = useCallback((values) => {
    const nextErrors = { ...defaultFormErrors };

    if (values.title.trim().length === 0) {
      nextErrors.title = "Title is required";
    }

    if (values.description.trim().length < 8) {
      nextErrors.description = "Description must contain at least 8 characters";
    }

    if (values.category.trim().length === 0) {
      nextErrors.category = "Category is required";
    }

    return nextErrors;
  }, []);

  const hasValidationErrors = useMemo(() => {
    return Object.values(formErrors).some((error) => error.length > 0);
  }, [formErrors]);

  const isFormEmpty = useMemo(() => {
    return (
      formState.title.trim().length === 0 &&
      formState.description.trim().length === 0 &&
      formState.category.trim().length === 0
    );
  }, [formState.category, formState.description, formState.title]);

  const onInput = (fieldName) => (event) => {
    const nextValue = event.target.value;
    const nextFormState = { ...formState, [fieldName]: nextValue };
    setFormState(nextFormState);
    setFormErrors(validateForm(nextFormState));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formState);
    setFormErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(
      (error) => error.trim().length > 0,
    );

    if (hasErrors) return;

    const isAdded = await addTask(formState);
    if (!isAdded) return;

    setFormState(defaultFormState);
    setFormErrors(defaultFormErrors);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <Field
          className={styles.field}
          label="Task title"
          id="new-task-title"
          ref={newTaskInputRef}
          value={formState.title}
          error={formErrors.title}
          onInput={onInput("title")}
        />
        <Field
          className={styles.field}
          label="Description"
          id="new-task-description"
          value={formState.description}
          error={formErrors.description}
          onInput={onInput("description")}
        />
      </div>

      <div className={styles.selectWrap}>
        <label className={styles.selectLabel} htmlFor="new-task-category">
          Category
        </label>
        <select
          className={styles.select}
          id="new-task-category"
          value={formState.category}
          onChange={onInput("category")}
        >
          <option value="">Choose category</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Personal">Personal</option>
        </select>
        {formErrors.category && (
          <span className={styles.error}>{formErrors.category}</span>
        )}
      </div>

      <Button
        className={styles.submit}
        isDisabled={isFormEmpty || hasValidationErrors}
        type="submit"
      >
        Add task
      </Button>
    </form>
  );
}
