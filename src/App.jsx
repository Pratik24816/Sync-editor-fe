import { useState } from 'react';
import TextEditor from './Components/TextEditor';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/documents/${uuidV4()}`} replace />} 
          />
          <Route
            path="/documents/:id"
            element={<TextEditor />} 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
