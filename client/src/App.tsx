import "./App.css";
import { useToggleLightDark } from "./hooks/ToggleMode";
import Navbar from "./components/layout/Navbar";
import TaskModal from "./components/task/TaskModal";
function App() {

  const { mode } = useToggleLightDark();

  return (
    <div className={mode ? "body dark-theme" : "body"}>
      <Navbar />
      <TaskModal />
    </div>
  )
}

export default App
