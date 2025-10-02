import React from "react";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import "./index.css"; // import global CSS

function App() {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}

export default App;
