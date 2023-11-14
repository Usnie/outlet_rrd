import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<h2>Главная</h2>} />
          <Route path="/products/*" element={<Products/>} />
           <Route path="*" element={<h2>Ресурс не найден</h2>} />
        </Routes>
      </div>
  );
}

export default App;
