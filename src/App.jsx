import TextEditor from "./Components/TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to a new document */}
        <Route
          path="/"
          element={<Navigate to={`/documents/${uuidV4()}`} replace />}
        />
        {/* Render TextEditor for document paths */}
        <Route
          path="/documents/:id"
          element={<TextEditor />}
        />
        {/* Fallback for unmatched paths */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
