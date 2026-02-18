import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import BoardPage from "./pages/BoardPage";
import Profiles from "./pages/Profiles";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { useAuthHook } from "./hooks/AuthHook";
import TaskList from "./pages/TaskList";
import { FormToggleProvider } from "./context/FormToggleProvider";
import { ToggleUpdProvider } from "./context/ToggleUpdProvider";
import AlertBox from "./utils/AlertBox";
import Footer from "./components/layout/Footer";


function App() {

  const { authenticated } = useAuthHook();

  return (
    <Router>
      <Navbar />
      <AlertBox />
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path={"/"} element={
          authenticated ?
            <FormToggleProvider>
              <BoardPage />
            </FormToggleProvider>
            :
            <Home />
        } />
        {
          <Route element={<ProtectedRoutes />}>
            <Route path={"/profile"} element={
              <ToggleUpdProvider>
                <Profiles />
              </ToggleUpdProvider>
            } />
            <Route path={"/task-list"} element={<TaskList />} />
          </Route>
        }

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
