import Field from "./Field";

export default function SearchTaskForm(props) {
  const { searchQuery, setSearchQuery } = props;
  return (
    <form onSubmit={(event) => event.preventDefault()} className="todo__form">
      <Field
        className="todo__field"
        label="Search Task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      ></Field>
    </form>
  );
}
