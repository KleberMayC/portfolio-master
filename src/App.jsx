import { Outlet } from "react-router-dom";

import Footer from "./components/footer/Footer";

import Menu from "./menuteste/Menu";

const App = () => {
  return (
    <div className="App">
      <Menu />

      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
