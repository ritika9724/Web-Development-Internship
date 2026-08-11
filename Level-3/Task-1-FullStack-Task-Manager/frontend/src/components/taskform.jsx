import { useState, useEffect } from "react";

function TaskForm({ addTask, editTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("High");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title || "");
      setDescription(editTask.description || "");
      setDueDate(editTask.dueDate || "");
      setPriority(editTask.priority || "High");
    } else {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("High");
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !dueDate) {
      alert("Please fill all fields");
      return;
    }

    const taskData = {
      title,
      description,
      dueDate,
      priority,
    };

    addTask(taskData);

    if (!editTask) {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("High");
    }
  };

  return (
    <div className="task-form">
      <h2>{editTask ? "Edit Task" : "Add New Task"}</h2>

      {editTask && (
        <p className="editing-text">
          You are currently editing a task
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button type="submit">
          {editTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;