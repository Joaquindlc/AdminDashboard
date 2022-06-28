

export const TaskControl = ({isChecked, setShowCompleted, cleanTask }) => {
  const handleDelete = () => {
    if (window.confirm("Estas seguro de eleminarlo?")) {
    cleanTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white
    text-center p-2 border-secondary">
     <div className="form-check form-switch">
     <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
        className="form-check-input"
      />{" "}
      <label>Tareas Completadas</label>
     </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">Limpiar</button>
    </div>
  );
};
