import TaskCard from "./taskcard";

function TaskList({
  tasks,
  deleteTask,
  setEditTask,
  editingId,
  setEditingId,
}) {
  return (
    <div className="task-list">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#777",
            fontSize: "18px",
          }}
        >
          No tasks available. Add your first task 🚀
        </p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setEditTask={setEditTask}
            editingId={editingId}
            setEditingId={setEditingId}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;