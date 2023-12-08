import "./App.css";
import TodoWrapper from "./Components/TodoWrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Components/Auth";
import Login from "./Components/Login";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/app"
            element={
              <RequireAuth>
                <TodoWrapper />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
