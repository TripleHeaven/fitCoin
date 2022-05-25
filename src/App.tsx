import { useWindowWidth } from "@react-hook/window-size";
import { Footer } from "components/Footer";
import { Paragraph } from "components/Paragraph";
import { FitCoin } from "components/SideComponents/FitCoin";
import { FitEcoSystem } from "components/SideComponents/FitEcoSystem";
import { Hero } from "components/SideComponents/Hero";
import { LoyaltyProgramm } from "components/SideComponents/LoyaltyProgramm";
import { RevolutionNutrition } from "components/SideComponents/RevolutionNutrition";
import { RoadMap } from "components/SideComponents/RoadMap";
import { Staking } from "components/SideComponents/Staking";
import { TierSystem } from "components/SideComponents/TierSystem";
import { Title, TitleVariant } from "components/Title";
import { DesktopProvider } from "hooks/useDesktopContext";
import { createContext, useContext, useEffect, useState } from "react";
import { Button, ButtonVariants } from "./components";
import "./index.css";
import { Sidebar } from "./Sidebar";
import "./styles/globals.css";

export const App = () => {
  return (
    <DesktopProvider>
      <div
        className="w-screen h-screen flex flex-col overflow-scroll"
        style={{
          backgroundColor: "#F7F8F9",
        }}
      >
        <div className=" pb-[64px]">
          <Sidebar />
          <Hero />
          <FitEcoSystem />
          <FitCoin />
          <Staking />
          <TierSystem />
          <RevolutionNutrition />
          <LoyaltyProgramm />
          <RoadMap />
        </div>

        <Footer />
      </div>
    </DesktopProvider>
  );
};

export default App;
