import "./App.scss";
import Nav from "./components/NavBar/molecules/Nav";
import { Route, Routes } from "react-router-dom";
import SidePanel from "./components/SidePanel/molecules/SidePanel";
import DashBoard from './components/Dashboard/molecules/DashBoard';
import Footer from "./components/Footer/molecules/Footer";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/projects" />
        <Route path="/user/bio" />
        <Route path="/user/credentials" />
        <Route path="/user" />
        <Route path="/general" />
        <Route path="/settings" />
        <Route path="/voice" />
        <Route path="/analytics" />
      </Routes>
      <Nav />
      <SidePanel />
      <DashBoard/>
      <Footer/>
    </div>
  );
};

export default App;
