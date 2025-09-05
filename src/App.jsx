// src/app/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import routes from "./Routes"; // 👈 Importas todas las rutas definidas

function App() {
  // Detectar si es mobile (ancho de pantalla menor a 768px)
  const isMobile = window.innerWidth < 768;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element, index }) => (
            <Route key={path} path={path} element={element} index={index} />
          ))}
        </Route>
      </Routes>
      <ToastContainer
        position={isMobile ? "top-center" : "bottom-right"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
