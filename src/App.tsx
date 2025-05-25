import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Toaster } from "sonner";
import GlobalKeyListener from "./components/hlo";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Something from "./pages/something";

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
      <Toaster
        richColors
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "14px",
            padding: "8px 12px",
            minHeight: "40px",
            maxWidth: "300px",
            borderRadius: "6px",
            background: "linear-gradient(90deg, #70000E, #050505, #70000E)",
            color: "white",
            border: "none",
          },
        }}
      />
    </Router>
  );
}
