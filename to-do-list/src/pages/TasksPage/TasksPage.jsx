import { TasksProvider } from "@/entities/todo";
import ToDo from "@/widgets/ToDo";

export default function TasksPage() {
  return (
    <TasksProvider>
      <ToDo></ToDo>
    </TasksProvider>
  );
}
