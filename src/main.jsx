import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./contexts/ChatProvider.jsx";

createRoot(document.getElementById("root")).render(
      <ContextProvider>
            <App />
      </ContextProvider>
);
