import { RoadMap } from "components/SideComponents/RoadMap";
import { Fitc } from "components/Tokenomics/Fitc";
import { FitcSpecialFeatures } from "components/Tokenomics/FitcSpecialFeatures";
import { FlexibleStaking } from "components/Tokenomics/FlexibleStaking";
import { HowToEarn } from "components/Tokenomics/HowToEarn";
import { TierSystem } from "components/Tokenomics/TierSystem";
import { TokenomicsInside } from "components/Tokenomics/TokenomicsInside";
import { Wrapper } from "components/Wrapper";

export const Tokenomics = () => (
  <Wrapper>
    <Fitc />
    <FitcSpecialFeatures />
    <HowToEarn />
    <FlexibleStaking />
    <TierSystem />
    <TokenomicsInside />
    <RoadMap />
  </Wrapper>
);
