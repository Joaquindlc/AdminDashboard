
import { useState, useEffect } from "react";
import { TaskManager } from "./components/TaskManager";
import { TaskList } from "./components/TaskList";
import { TaskControl } from "./components/TaskControl";
import { Container } from "./components/Container"


function App() {
  //Mi lista de tareas y su variable
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  function createTask(taskName) {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  const ToggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const cleanTask = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  return (
 
    <main className="bg-dark vh-100 text-white">
         <Container>
         <TaskManager createTask={createTask} />
        <TaskList tasks={taskItems} ToggleTask={ToggleTask} />
        <TaskControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
        />
        {showCompleted && (
          <TaskList
            tasks={taskItems}
            ToggleTask={ToggleTask}
            showCompleted={showCompleted}
          />
        )}
        
    </Container>
    </main>
    
  );
}

export default App;
