import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrescriptionPage from "./pages/PrescriptionPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index="true" element={<Home />} />
          <Route path="/prescription" element={<PrescriptionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
