import { Footer } from "components/Footer";

import { DesktopProvider } from "hooks/useDesktopContext";
import { history } from "utils/history";
import "./index.css";
import { Sidebar } from "./Sidebar";
import "./styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "routes/Main";
import { Tokenomics } from "routes/Tokenomics";
import { Root } from "components/Root";

export const App = () => {
  return (
    <Router>
      <DesktopProvider>
        <Root />
      </DesktopProvider>
    </Router>
  );
};

export default App;
