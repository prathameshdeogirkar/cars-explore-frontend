import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./views/App/App";
import CarDetail from './views/Car-Details/CarDetail';
import AddCar from "./views/Add-Car/AddCar";
import EditCar from "./views/Edit-Car/EditCar";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail" element={<CarDetail />} />
      <Route path="/detail/:id" element={<CarDetail />} />
      <Route path="/add" element={<AddCar />} />
      <Route path="/edit/:id" element={<EditCar />} />

    </Routes>
  </BrowserRouter>
);