import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./components/layout/MainLayout.jsx";

// Public Pages
import Homepage from "./components/Homepage.jsx";
import Programs from "./components/Programs.jsx";
import Achievments from "./components/Achievments.jsx";
import Workspace from "./components/Workspace.jsx";
import CircuitVault from "./components/CircuitVault.jsx";
import Userin from "./components/Userin.jsx";
import Profile from "./components/Profile.jsx";

// Context 
import { ProductProvider } from "./components/context/ProductContext.jsx";

// Premium (Added Value) Pages
import ProjectManager from "./components/dev/ProjectManager.jsx";
import EditProject from "./components/dev/EditProject.jsx";
import OnlineSheets from "./components/OnlineSheets.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";

// Fallback
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/wattwizards-platform/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "wattwizards-platform", element: <Homepage /> },
      { path: "homepage", element: <Homepage /> },
      { path: "programs", element: <Programs /> },
      { path: "achievments", element: <Achievments /> },
      { path: "workspace", element: <Workspace /> },
      { path: "vault", element: <CircuitVault /> },
      { path: "login", element: <Userin /> },
      { path: "profile", element: <Profile /> },
      { path: "online-sheets", element: <OnlineSheets /> },
      { path: "project", element: <ProjectManager /> },
      { path: "edit-project", element: <EditProject /> },
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