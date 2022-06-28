import { TaskRow } from "./TaskRow";

export const TaskList = ({ tasks, ToggleTask, showCompleted = false }) => {



  const taskListRows = (doneValue) =>
  tasks
    .filter((task) => task.done === doneValue)
    .map((task) => (
      <TaskRow key={task.name} task={task} ToggleTask={ToggleTask} />
    ));

  return (
    <table className="table table-dark table-striped table-bordered table-hover border-secondary">
      <thead >
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskListRows(showCompleted)}</tbody>
    </table>
  );
};
