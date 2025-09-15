import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LDProvider } from "launchdarkly-react-client-sdk";
import "./index.css";
import App from "./App.tsx";

const LD_CLIENT_ID = "68c2546fae804509aa5aa699";

const DUMMY_CONTEXT = {
  "kind": "user",
  "key": "user-key-123abc",
  "name": "Anna",
  "email": "anna@globalhealthexample.com",
  "jobFunction": "doctor"
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LDProvider clientSideID={LD_CLIENT_ID} context={DUMMY_CONTEXT} >
      <App />
    </LDProvider>
  </StrictMode>,
);
