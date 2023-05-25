import "./App.scss";
import { AnimatePresence, motion } from "framer-motion";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import SidePanel from "./components/SideNav/SidePanel";
import Footer from "./components/Footer/molecules/Footer";
import Bio from "./pages/bioPage/Bio";
import Error404 from "./pages/errorPage/Error404";
import CredentialsPage from "./pages/credentialsPage/CredentialsPage";
import HomePage from "./pages/homePage/HomePage";
import Projects from "./pages/projectsPage/Projects";
import Nav from "./components/NavBar/Nav";
import Login from "./pages/LoginPage/Login";
import Overview from "./pages/overviewPage/Overview";
import PopupModal from "./components/PopupModal/PopupModal";
import { useContext, useState } from "react";
import { AppContext } from "./utilities/context";
import Register from "./pages/registerPage/Register";
const App = () => {
  const { modalOpen, setModalOpen, setCloseSidePanel, closeSidePanel } =
    useContext(AppContext);

  const DashboardLayout = (): JSX.Element => {
    //navbar and side panel will be added here later
    return (
      <div className="App">
        <SidePanel />
        <Nav />
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

  const OverviewLayout = (): JSX.Element => {
    return (
      <div className="App">
        <SidePanel />
        <Outlet />
      </div>
    );
  };

  //these two componenet below will help us set framer-motion to animate our routes
  const AnimatedOutlet: React.FC = () => {
    const o = useOutlet();
    const [outlet] = useState(o);
    return <>{outlet}</>;
  };
  const AuthenticationLayout = (): JSX.Element => {
    const location = useLocation();
    return (
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div key={location.pathname}>
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/",
      element: <OverviewLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Overview />,
        },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard/projects",
          element: <Projects />,
        },
        {
          path: "/dashboard/bio",
          element: <Bio />,
        },
        {
          path: "/dashboard/credentials",
          element: <CredentialsPage />,
        },
      ],
    },
    {
      path: "/",
      element: <CommunityLayout />,
      children: [
        {
          path: "/community/:id",
          element: <Projects />,
        },
        {
          path: "/bio",
          element: <Bio />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthenticationLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />, // No Signup page yet, so it will just return the error 404 page, which I intend to style as well.
        },
      ],
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
