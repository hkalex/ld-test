import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LDProvider } from "launchdarkly-react-client-sdk";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LDProvider clientSideID="68c2546fae804509aa5aa699">
      <App />
    </LDProvider>
  </StrictMode>,
);
