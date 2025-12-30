import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LuxeStore from "./pages/LuxeStore";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/luxestore"
          element={
            <ProtectedRoute>
              <LuxeStore />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

