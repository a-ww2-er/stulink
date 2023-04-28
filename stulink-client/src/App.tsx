import "./App.scss";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SidePanel from "./components/SideNav/SidePanel";
import Footer from "./components/Footer/molecules/Footer";
import Bio from "./pages/bioPage/Bio";
import Error404 from "./pages/errorPage/Error404";
import CredentialsPage from "./pages/credentialsPage/CredentialsPage";
import HomePage from "./pages/homePage/HomePage";
import Projects from "./pages/projectsPage/Projects";
import Nav from "./components/NavBar/Nav";
import Login from "./pages/LoginPage/Login";
const App = () => {
  // these are layouts for eachpages.. <outlet /> tells reactrouter to render their children elements if any..
  //not all pages need layouts and not all needs the same layout so thats why im doing this way..
  // we might get bugs from routing later cause i cant exactly test the way i stacked routes if its correct or not
  // but id test all that when we make the other pages
  const DashboardLayout = (): JSX.Element => {
    //navbar and side panel will be added here later
    return (
      <div className="App">
        <Nav />
        <SidePanel />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const CommunityLayout = (): JSX.Element => {
    return (
      <div className="App">
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard/:id/projects",
          element: <Projects />,
        },
        {
          path: "/dashboard/:id/bio",
          element: <Bio />,
        },
        {
          path: "/dashboard/:id/credentials",
          element: <CredentialsPage />,
        },
      ],
    },
    {
      path: "/",
      element: <CommunityLayout />,
      children: [
        {
          path: "/dark/:id",
          element: <Projects />,
        },
        {
          path: "/bio",
          element: <Bio />,
        },
      ],
    },
    {
      path: "/register",
      element: <Error404/>, // No Signup page yet, so it will just return the error 404 page, which I intend to style as well.
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
