import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/navbar";
import TaskForm from "./components/taskform";
import TaskList from "./components/tasklist";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Load tasks from MongoDB
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);

      const formattedTasks = response.data.map((task) => ({
        ...task,
        id: task._id,
      }));

      setTasks(formattedTasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  // Add or Update task
  const addTask = async (task) => {
    try {
      if (editTask) {
        // UPDATE
        const response = await axios.put(
          `${API_URL}/${editTask.id}`,
          task
        );

        const updatedTask = {
          ...response.data,
          id: response.data._id,
        };

        setTasks((prevTasks) =>
          prevTasks.map((t) =>
            t.id === editTask.id ? updatedTask : t
          )
        );

        setEditTask(null);
        setEditingId(null);
      } else {
        // ADD
        const response = await axios.post(API_URL, task);

        const newTask = {
          ...response.data,
          id: response.data._id,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
      }
    } catch (error) {
      console.error("Failed to save task:", error);
      alert("Task save nahi ho paya.");
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
      );

      if (editingId === id) {
        setEditTask(null);
        setEditingId(null);
      }
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Task delete nahi ho paya.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <TaskForm
          addTask={addTask}
          editTask={editTask}
        />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          setEditTask={setEditTask}
          editingId={editingId}
          setEditingId={setEditingId}
        />
      </div>
    </>
  );
}

export default App;