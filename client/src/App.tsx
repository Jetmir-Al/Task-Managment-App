import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import TaskModal from "./components/task/TaskModal";
import Home from "./pages/Home";
import BoardPage from "./pages/BoardPage";
import Profiles from "./pages/Profiles";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./Route/ProtectedRoutes";
import { useAuthHook } from "./hooks/AuthHook";
import AuthHome from "./pages/AuthHome";

function App() {

  const { authenticated } = useAuthHook();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path={"/"} element={
          authenticated ?
            <AuthHome />
            :
            <Home />
        } />
        {
          <Route element={<ProtectedRoutes />}>
            <Route path={"/board-page"} element={<BoardPage />} />
            <Route path={"/profile"} element={<Profiles />} />
            <Route path={"/taskmodal"} element={<TaskModal />} />
          </Route>
        }

      </Routes>
    </Router>
  )
}

export default App
