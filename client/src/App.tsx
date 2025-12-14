import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useToggleLightDark } from "./hooks/ToggleMode";
import Navbar from "./components/layout/Navbar";
import TaskModal from "./components/task/TaskModal";
import Home from "./pages/Home";
import BoardPage from "./pages/BoardPage";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import Register from "./pages/Register";

function App() {

  const { mode } = useToggleLightDark();

  return (
    <Router>
      <div className={mode ? "body dark-theme" : "body"}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/board-page"} element={<BoardPage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/profile"} element={<Profiles />} />
          <Route path={"/taskmodal"} element={<TaskModal />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
