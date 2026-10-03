import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Submit Web Engineering assignment", category: "Academic" },
    { id: 2, title: "Attend Coding Society meetup", category: "Society" },
    { id: 3, title: "Return books to the library", category: "Library" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Academic");

  const handleAddTask = (e) => {
    e.preventDefault(); 

    if (newTitle.trim() === "") {
      alert("Please enter a task title.");
      return;
    }

    const newTask = {
      id: Date.now(), 
      title: newTitle.trim(),
      category: newCategory,
    };

    setTasks([...tasks, newTask]); 
    setNewTitle(""); 
  };

  const [effectMessage, setEffectMessage] = useState("");
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  return (
    <div className="board">
      <header className="board-header">
        <h1>Campus Task Board</h1>
        <p>Keep track of your classes, societies and campus errands.</p>
        <span className="task-count">{tasks.length} tasks</span>
      </header>

      <form className="add-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <option value="Academic">Academic</option>
          <option value="Society">Society</option>
          <option value="Library">Library</option>
          <option value="Sports">Sports</option>
          <option value="Personal">Personal</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            index={index}
            title={task.title}
            category={task.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
