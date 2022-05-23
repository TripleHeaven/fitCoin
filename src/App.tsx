import { Paragraph } from "components/Paragraph";
import { FitEcoSystem } from "components/SideComponents/FitEcoSystem";
import { Hero } from "components/SideComponents/Hero";
import { Title, TitleVariant } from "components/Title";
import { Button, ButtonVariants } from "./components";
import "./index.css";
import { Sidebar } from "./Sidebar";
import "./styles/globals.css";

export const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-scroll">
      <Sidebar />
      <Hero />
      <FitEcoSystem />
    </div>
  );
};

export default App;
