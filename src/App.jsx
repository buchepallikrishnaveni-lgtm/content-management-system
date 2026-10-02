import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Content from "./pages/Content";
import AddContent from "./pages/AddContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/content" element={<Content />} />
        <Route path="/add-content" element={<AddContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;