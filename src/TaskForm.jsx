import { useState } from "react";

function TaskForm() {
  // task = jo input box ma likha ja raha hai
  const [task, setTask] = useState("");
  // taskList = saare added tasks ki list
  const [taskList, setTaskList] = useState([]);

  // Add Task button dabane par yeh chalta hai
  const handleAddTask = () => {
    const text = task.trim(); // extra spaces hata do
    if (text === "") return; // khali task add nahi hoga

    const newTask = { id: Date.now(), text: text, done: false };
    setTaskList([...taskList, newTask]); // purani list + naya task
    setTask(""); // input box khali kar do
  };

  // Enter dabane se bhi task add ho
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  // Task complete / incomplete karna
  const toggleTask = (id) => {
    setTaskList(
      taskList.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  // Task delete karna
  const deleteTask = (id) => {
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const doneCount = taskList.filter((t) => t.done).length;

  return (
    <div className="task-form">
      <div className="task-input-row">
        <input
          type="text"
          className="task-input"
          placeholder="Write a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="addtask" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      {taskList.length > 0 && (
        <p className="task-count">
          {doneCount} of {taskList.length} tasks completed
        </p>
      )}

      {taskList.length === 0 ? (
        <p className="task-empty">No tasks yet. Add your first task above.</p>
      ) : (
        <ul className="task-list">
          {taskList.map((t) => (
            <li key={t.id} className={t.done ? "task-item done" : "task-item"}>
              <label className="task-label">
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggleTask(t.id)}
                />
                <span>{t.text}</span>
              </label>
              <button
                className="task-delete"
                onClick={() => deleteTask(t.id)}
                aria-label={"Delete " + t.text}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskForm;