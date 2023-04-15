import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Projetos from "./pages/projetos/Projetos";
import Servicos from "./components/servicos/Servicos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {
        path: "servicos",
        element: <Servicos />,
      },
      {
        path: "portfolio",
        element: <Projetos />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
