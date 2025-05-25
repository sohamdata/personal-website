import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Something from "./pages/something";
import GlobalKeyListener from "./components/hlo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/idk" element={<Something />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalKeyListener />
    </Router>
  );
}
