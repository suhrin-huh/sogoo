import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles/MuiTheme.ts";
import { ThemeProvider } from "@mui/material";

import ScrollToTop from "./configs/scroll.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
