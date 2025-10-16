import { createRoot } from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
