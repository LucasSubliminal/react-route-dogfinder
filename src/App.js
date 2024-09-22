// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs/:name" element={<DogDetails />} />
        {/* Redirect all unknown routes to /dogs */}
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
