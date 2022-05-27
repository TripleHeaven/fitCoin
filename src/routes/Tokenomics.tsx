import { RoadMap } from "components/SideComponents/RoadMap";
import { Fitc } from "components/Tokenomics/Fitc";
import { FitcSpecialFeatures } from "components/Tokenomics/FitcSpecialFeatures/FitcSpecialFeatures";
import { FlexibleStaking } from "components/Tokenomics/FlexibleStaking";
import { HowToEarn } from "components/Tokenomics/HowToEarn/HowToEarn";
import { TierSystem } from "components/Tokenomics/TierSystem/TierSystem";
import { TokenomicsInside } from "components/Tokenomics/TokenomicsInside/TokenomicsInside";
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
