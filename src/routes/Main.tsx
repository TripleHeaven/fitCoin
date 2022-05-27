import { FitCoin } from "components/SideComponents/FitCoin/FitCoin";
import { FitEcoSystem } from "components/SideComponents/FitEcoSystem/FitEcoSystem";
import { Hero } from "components/SideComponents/Hero/Hero";
import { LoyaltyProgramm } from "components/SideComponents/LoyaltyProgramm";
import { RevolutionNutrition } from "components/SideComponents/RevolutionNutrition/RevolutionNutrition";
import { RoadMap } from "components/SideComponents/RoadMap";
import { Staking } from "components/SideComponents/Staking/Staking";
import { TierSystem } from "components/SideComponents/TierSystem/TierSystem";
import { Wrapper } from "components/Wrapper";
import styles from "./Main.module.css";

export const Main = () => (
  <Wrapper>
    <main className={styles.wrapperMain}>
      <Hero />
      <FitEcoSystem />
      <FitCoin />
      <Staking />
      <TierSystem />
      <RevolutionNutrition />
      <LoyaltyProgramm />
      <RoadMap />
    </main>
  </Wrapper>
);
