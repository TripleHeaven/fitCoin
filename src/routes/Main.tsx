import { FitCoin } from "components/SideComponents/FitCoin";
import { FitEcoSystem } from "components/SideComponents/FitEcoSystem";
import { Hero } from "components/SideComponents/Hero";
import { LoyaltyProgramm } from "components/SideComponents/LoyaltyProgramm";
import { RevolutionNutrition } from "components/SideComponents/RevolutionNutrition";
import { RoadMap } from "components/SideComponents/RoadMap";
import { Staking } from "components/SideComponents/Staking";
import { TierSystem } from "components/SideComponents/TierSystem";
import { Wrapper } from "components/Wrapper";

export const Main = () => (
  <Wrapper>
    <Hero />
    <FitEcoSystem />
    <FitCoin />
    <Staking />
    <TierSystem />
    <RevolutionNutrition />
    <LoyaltyProgramm />
    <RoadMap />
  </Wrapper>
);
