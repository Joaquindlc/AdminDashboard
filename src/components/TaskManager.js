import { useState } from "react";

export const TaskManager = ({ createTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
  

    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Crear Tarea.."
          autoFocus
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm" type="submit">
          Guardar 
        </button>
      </div>
    </form>
  );
};
