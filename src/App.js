import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projets from "./pages/Projets";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projets />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/transactions" element={<Transactions />} />
        {/* prevoir page 404 au path "*"  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
