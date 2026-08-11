function TaskCard({ task, deleteTask, setEditTask, setEditingId }) {
  const handleEdit = () => {
    setEditTask(task);
    setEditingId(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p className="due-date">
        <strong>Due Date:</strong> {task.dueDate}
      </p>

      <span className="priority">
        Priority: {task.priority}
      </span>

      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;