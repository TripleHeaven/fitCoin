import { Paragraph } from "components/Paragraph";
import { FitCoin } from "components/SideComponents/FitCoin";
import { FitEcoSystem } from "components/SideComponents/FitEcoSystem";
import { Hero } from "components/SideComponents/Hero";
import { RevolutionNutrition } from "components/SideComponents/RevolutionNutrition";
import { Staking } from "components/SideComponents/Staking";
import { TierSystem } from "components/SideComponents/TierSystem";
import { Title, TitleVariant } from "components/Title";
import { Button, ButtonVariants } from "./components";
import "./index.css";
import { Sidebar } from "./Sidebar";
import "./styles/globals.css";

export const App = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col overflow-scroll"
      style={{
        backgroundColor: "#F7F8F9",
      }}
    >
      <Sidebar />
      <Hero />
      <FitEcoSystem />
      <FitCoin />
      <Staking />
      <TierSystem />
      <RevolutionNutrition />
    </div>
  );
};

export default App;
