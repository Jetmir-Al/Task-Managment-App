import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import BoardPage from "./pages/BoardPage";
import Profiles from "./pages/Profiles";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./Route/ProtectedRoutes";
import { useAuthHook } from "./hooks/AuthHook";
import TaskList from "./pages/TaskList";

const queryClient = new QueryClient();

function App() {

  const { authenticated } = useAuthHook();

  return (
    <QueryClientProvider client={queryClient}>

      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path={"/"} element={
            authenticated ?
              <BoardPage />
              :
              <Home />
          } />
          {
            <Route element={<ProtectedRoutes />}>
              <Route path={"/profile"} element={<Profiles />} />
              <Route path={"/task-list"} element={<TaskList />} />
            </Route>
          }

        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
