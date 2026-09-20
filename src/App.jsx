import TaskForm from "./TaskForm";

function App() {
  return (
    <>
      <nav>
        <div className="brand">
          <h2>Student Task Manager</h2>
        </div>
        <div className="nav-links">
          <button>Home</button>
          <button>Tasks</button>
          <button>About</button>
        </div>
      </nav>

      <TaskForm />
    </>
  );
}

export default App;