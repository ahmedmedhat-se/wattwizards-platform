import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductProvider } from "./Components/Context/ProductContext.jsx";

// Layout
import MainLayout from "./Components/Layout/MainLayout.jsx";

// Public Pages
import Homepage from "./Components/Homepage.jsx";
import Programs from "./Components/Programs.jsx";
import Achievments from "./Components/Achievments.jsx";
import Workspace from "./Components/Workspace.jsx";
import CircuitVault from "./Components/CircuitVault.jsx";
import Userin from "./Components/Userin.jsx";
import Profile from "./Components/Profile.jsx";

// Premium (Added Value) Pages
import ProjectManager from "./Components/Dev/ProjectManager.jsx";
import OnlineSheets from "./Components/OnlineSheets.jsx";
import Products from "./Components/Context/Products.jsx";
import Cart from "./Components/Context/Cart.jsx";

// Fallback
import NotFound from "./Components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "WattWizards", element: <Homepage /> },
      { path: "homepage", element: <Homepage /> },
      { path: "programs", element: <Programs /> },
      { path: "achievments", element: <Achievments /> },
      { path: "workspace", element: <Workspace /> },
      { path: "vault", element: <CircuitVault /> },
      { path: "login", element: <Userin /> },
      { path: "profile", element: <Profile /> },
      { path: "online-sheets", element: <OnlineSheets /> },
      { path: "project", element: <ProjectManager /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;