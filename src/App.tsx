import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    </>
  );
}

export default App;
